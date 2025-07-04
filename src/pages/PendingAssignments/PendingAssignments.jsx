import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import AssignmentTable from "../../components/AssignmentTable/AssignmentTable";
import AssignmentActionModal from "../../components/AssignmentActionModal/AssignmentActionModal";
import api from "../../api/api";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PendingAssignments = () => {
  const [submissions, setSubmissions] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setDataLoading(true);

    // fetch only pending submissions
    axiosSecure("/submissions?status=pending")
      .then((res) => {
        setSubmissions(res.data);
        return api("/assignments");
      })
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setDataLoading(false));
  }, [axiosSecure]);

  const combined = submissions
    .map((submission) => {
      const assignment = assignments.find(
        (a) => a._id === submission.assignmentId
      );
      return {
        ...submission,
        assignmentDetails: assignment,
      };
    })
    .filter((item) => item.assignmentDetails !== undefined);

  const handleSuccessMark = () => {
    setSelectedSubmission(null);

    // refresh pending
    setDataLoading(true);
    axiosSecure("/submissions?status=pending")
      .then((res) => setSubmissions(res.data))
      .catch((err) => console.error(err))
      .finally(() => setDataLoading(false));
  };

  if (dataLoading) return <Loading />;

  return (
    <div className="mb-3 lg:mb-6 min-h-screen">
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
