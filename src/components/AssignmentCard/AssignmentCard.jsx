import React from "react";
import { Link } from "react-router";

const AssignmentCard = ({ assignment }) => {
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
          <Link
            to={`/update-assignment/${assignment._id}`}
            className="btn btn-sm btn-outline btn-secondary"
          >
            Update
          </Link>

          <Link
            to={`/view-assignment/${assignment._id}`}
            className="btn btn-sm btn-outline btn-secondary"
          >
            View
          </Link>

          <button className="btn btn-sm btn-outline btn-secondary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default AssignmentCard;
