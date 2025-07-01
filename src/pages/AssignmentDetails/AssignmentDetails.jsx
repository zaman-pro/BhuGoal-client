import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../Loading/Loading";
import SubmitAssignmentModal from "../SubmitAssignmentModal/SubmitAssignmentModal";

const AssignmentDetails = () => {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios(`http://localhost:3000/assignments/${id}`)
      .then((res) => setAssignment(res.data))
      .catch((err) => console.error(err))
      .finally(() => setDataLoading(false));
  }, [id]);

  if (dataLoading) return <Loading />;

  if (!assignment) return <p>Assignment not found.</p>;

  return (
    <div className="mb-3 lg:mb-6 bg-base-200 p-4 rounded flex items-center justify-center">
      <div className="flex flex-col md:items-end gap-5">
        <div className="flex flex-col md:flex-row gap-5 items-center ">
          <div>
            <img
              src={assignment?.thumbnail}
              alt={assignment?.title}
              className="w-full h-48 object-cover rounded"
            />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold">{assignment?.title}</h2>
            <p className="text-sm mb-3">{assignment?.difficultyLevel}</p>
            <p>
              Deadline:{" "}
              <span className="font-medium">
                {assignment?.dueDate?.split("T")[0]}
              </span>
            </p>
            <p>
              Marks: <span className="font-bold">{assignment?.marks}</span>
            </p>
            <p>Description: {assignment?.description}</p>
            <p className="text-sm text-gray-500">
              Created by: {assignment?.userEmail}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="btn bg-secondary text-white"
        >
          Take Assignment
        </button>
        {showModal && (
          <SubmitAssignmentModal
            assignmentId={assignment._id}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AssignmentDetails;
