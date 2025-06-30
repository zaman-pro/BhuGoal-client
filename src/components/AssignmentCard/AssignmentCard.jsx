import React from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const AssignmentCard = ({ assignment }) => {
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
  const handleDeleteAssignment = () => {};

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
            className="btn btn-sm btn-outline btn-secondary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
