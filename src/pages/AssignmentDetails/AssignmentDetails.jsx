import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Loading from "../Loading/Loading";
import SubmitAssignmentModal from "../SubmitAssignmentModal/SubmitAssignmentModal";
import useAuth from "../../hooks/useAuth";
import { FaCheckCircle } from "react-icons/fa";

const AssignmentDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [assignment, setAssignment] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checkingSubmission, setCheckingSubmission] = useState(true);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isSubmitted) {
      navigate("/my-attempted-assignments");
    } else {
      setShowModal(true);
    }
  };

  // fetch assignment details
  useEffect(() => {
    setDataLoading(true);
    axios(`http://localhost:3000/assignments/${id}`)
      .then((res) => setAssignment(res.data))
      .catch((err) => console.error(err))
      .finally(() => setDataLoading(false));
  }, [id]);

  // check if already submitted
  useEffect(() => {
    if (!user?.email || !id) return;

    axios(
      `http://localhost:3000/submissions?assignmentId=${id}&userEmail=${user.email}`
    )
      .then((res) => {
        if (res.data?.length > 0) {
          setIsSubmitted(true);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setCheckingSubmission(false));
  }, [user?.email, id]);

  if (dataLoading || checkingSubmission) return <Loading />;
  if (!assignment) return <p>Assignment not found.</p>;

  return (
    <div className="mb-3 lg:mb-6 bg-base-200 p-4 rounded flex items-center justify-center flex-col gap-5">
      {isSubmitted && (
        <p className="flex items-center gap-2 font-semibold text-success">
          <FaCheckCircle />
          Assignment already submitted
        </p>
      )}
      <div className="flex flex-col md:items-end gap-5">
        <div className="flex flex-col md:flex-row gap-5 items-center">
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
          onClick={handleButtonClick}
          className={`btn ${isSubmitted ? "btn-success" : "btn-secondary"}`}
        >
          {isSubmitted ? (
            <span className="flex items-center gap-2">
              <FaCheckCircle /> My Submissions
            </span>
          ) : (
            "Take Assignment"
          )}
        </button>

        {showModal && (
          <SubmitAssignmentModal
            assignmentId={assignment._id}
            onClose={() => setShowModal(false)}
            onSuccessSubmit={() => {
              setShowModal(false);
              setIsSubmitted(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AssignmentDetails;
