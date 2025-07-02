import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import AssignmentTable from "../../components/AssignmentTable/AssignmentTable";
import AssignmentActionModal from "../../components/AssignmentActionModal/AssignmentActionModal";

const PendingAssignments = () => {
  const [submissions, setSubmissions] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    setDataLoading(true);

    // fetch only pending submissions
    axios("http://localhost:3000/submissions?status=pending")
      .then((res) => {
        setSubmissions(res.data);
        return axios("http://localhost:3000/assignments");
      })
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setDataLoading(false));
  }, []);

  const combined = submissions.map((sub) => {
    const assignment = assignments.find((a) => a._id === sub.assignmentId);
    return {
      ...sub,
      assignmentDetails: assignment,
    };
  });

  const handleSuccessMark = () => {
    setSelectedSubmission(null);

    // refresh pending
    setDataLoading(true);
    axios("http://localhost:3000/submissions?status=pending")
      .then((res) => setSubmissions(res.data))
      .catch((err) => console.error(err))
      .finally(() => setDataLoading(false));
  };

  if (dataLoading) return <Loading />;

  return (
    <div className="mb-3 lg:mb-6">
      {combined.length === 0 ? (
        <p className="text-center text-lg text-primary bg-base-200 p-4 rounded">
          No pending found.
        </p>
      ) : (
        <AssignmentTable
          submissions={combined}
          isSubmitted={false}
          onGiveMark={(submission) => setSelectedSubmission(submission)}
        />
      )}

      {selectedSubmission && (
        <AssignmentActionModal
          mode="mark"
          submissionData={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
          onSuccessMark={handleSuccessMark}
        />
      )}
    </div>
  );
};

export default PendingAssignments;
