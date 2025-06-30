import React from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AssignmentCard = ({ assignment, setAssignments }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isCreator = user?.email === assignment?.userEmail;

  //   update handler
  const handleUpdateAssignment = () => {
    if (isCreator) {
      navigate(`/update-assignment/${assignment._id}`);
    } else {
      toast.dismiss();
      toast.error("Only user can modify", { id: "update-error" });
    }
  };

  //   delete handler
  const handleDeleteAssignment = () => {
    if (!isCreator) {
      toast.dismiss();
      toast.error("Only user can delete", { id: "delete-error" });
      return;
    }

    toast.dismiss();
    toast(
      (t) => (
        <div className="text-sm">
          <p className="mb-2">
            Are you sure you want to <b>Delete</b> this assignment?
          </p>
          <div className="flex justify-end gap-2">
            <button
              className="btn btn-sm btn-outline btn-secondary"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="btn btn-sm btn-error text-white"
              onClick={async () => {
                toast.dismiss(t.id);

                toast.promise(
                  axios.delete(
                    `http://localhost:3000/assignments/${assignment._id}`
                  ),
                  {
                    loading: "Deleting assignment...",
                    success: () => {
                      setAssignments((prev) =>
                        prev.filter((a) => a._id !== assignment._id)
                      );
                      return "Assignment deleted successfully!";
                    },
                    error: "Failed to delete assignment.",
                  }
                );
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { id: `delete-confirm-${assignment._id}` }
    );
  };

  return (
    <div className="bg-base-200 rounded flex flex-col justify-between min-h-[300px] hover:shadow-lg transition duration-300">
      {/* card image */}
      <div className="bg-base-100 w-full h-32">
        <img
          src={assignment.thumbnail}
          alt={assignment.title}
          className="object-cover w-full h-full rounded-t"
        />
      </div>

      {/* card content */}
      <div className="text-center p-4 flex flex-col justify-between flex-grow">
        <h4
          className="font-semibold text-sm mb-1 truncate"
          title={assignment.title}
        >
          {assignment.title}
        </h4>
        <p className="text-xs">Marks: {assignment.marks}</p>
        <p className="text-xs">
          Difficulty :{" "}
          <span className="font-bold">{assignment.difficultyLevel}</span>
        </p>

        {/* card button */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={handleUpdateAssignment}
            className="btn btn-sm btn-outline btn-secondary"
          >
            Update
          </button>

          <Link
            to={`/view/${assignment._id}`}
            className="btn btn-sm btn-outline btn-secondary"
          >
            View
          </Link>

          <button
            onClick={handleDeleteAssignment}
            className="btn btn-sm btn-error text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
