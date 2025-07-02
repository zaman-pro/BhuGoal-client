import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import AssignmentTable from "../../components/AssignmentTable/AssignmentTable";

const PendingAssignments = () => {
  const [submissions, setSubmissions] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true);

    // Fetch only pending submissions
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

  const pendingSubmissions = submissions.map((submission) => {
    const assignment = assignments.find(
      (a) => a._id === submission.assignmentId
    );
    return {
      ...submission,
      assignmentDetails: assignment,
    };
  });

  if (dataLoading) return <Loading />;

  if (pendingSubmissions.length === 0) {
    return (
      <div className="text-center text-lg text-primary bg-base-200 p-4 rounded">
        No pending submissions found.
      </div>
    );
  }

  return (
    <div className="mb-3 lg:mb-6">
      <AssignmentTable submissions={pendingSubmissions} isSubmitted={false} />
    </div>
  );
};

export default PendingAssignments;
