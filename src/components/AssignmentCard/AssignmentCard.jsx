import React from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { FiEdit, FiEye, FiTrash2, FiX, FiCheck } from "react-icons/fi";
import api from "../../api/api";

const AssignmentCard = ({ assignment, setAssignments }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isCreator = user?.email === assignment?.userEmail;

  //   update handler
  const handleUpdateAssignment = () => {
    toast.dismiss();
    if (isCreator) {
      navigate(`/update-assignment/${assignment._id}`);
    } else {
      toast.error("Only creator can modify", { id: "update-error" });
    }
  };

  //   delete handler
  const handleDeleteAssignment = () => {
    toast.dismiss();
    if (!isCreator) {
      toast.error("Only creator can delete", { id: "delete-error" });
      return;
    }

    toast.dismiss();
    toast(
      (t) => (
        <div className="text-sm max-w-xs">
          <div className="flex items-center gap-3 mb-2">
            <FiTrash2 className="text-2xl text-error" />
            <p>
              Are you sure you want to <b>delete</b> this assignment?
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="btn btn-sm btn-outline btn-secondary"
              onClick={() => toast.dismiss(t.id)}
            >
              <FiX size={16} /> Cancel
            </button>
            <button
              className="btn btn-sm btn-error text-white"
              onClick={async () => {
                toast.dismiss(t.id);

                toast.promise(
                  api.delete(`/assignments/${assignment._id}`),
                  {
                    loading: "Deleting assignment...",
                    success: () => {
                      setAssignments((prev) =>
                        prev.filter((a) => a._id !== assignment._id)
                      );
                      return "Assignment deleted successfully!";
                    },
                    error: "Failed to delete assignment.",
                  },
                  {
                    id: `delete-progress-${assignment._id}`,
                  }
                );
              }}
            >
              <FiCheck size={16} /> Confirm
            </button>
          </div>
        </div>
      ),
      {
        id: `delete-confirm-${assignment._id}`,
        duration: 4000,
      }
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
            <FiEdit size={16} />
            {/* Update */}
          </button>

          <Link
            to={`/assignment-details/${assignment._id}`}
            className="btn btn-sm btn-outline btn-secondary"
          >
            {/* <FiEye size={16} /> */}
            View
          </Link>

          <button
            onClick={handleDeleteAssignment}
            className="btn btn-sm btn-error text-white"
          >
            <FiTrash2 size={16} />
            {/* Delete */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
