import React, { useEffect, useState } from "react";
import AssignmentTable from "../../components/AssignmentTable/AssignmentTable";
import axios from "axios";
import Loading from "../Loading/Loading";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const MyAttemptedAssignments = () => {
  const [submissions, setSubmissions] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const { user } = useAuth();

  // data fetch
  useEffect(() => {
    setDataLoading(true);

    // fetch user's submissions
    axios(`http://localhost:3000/submissions?userEmail=${user?.email}`)
      .then((res) => {
        setSubmissions(res.data);

        // fetch all assignments to get details
        return axios("http://localhost:3000/assignments");
      })
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setDataLoading(false));
  }, [user]);

  // combine submission data with assignment data
  const combined = submissions.map((submission) => {
    const assignment = assignments.find(
      (a) => a._id === submission.assignmentId
    );
    return {
      ...submission,
      assignmentDetails: assignment,
    };
  });

  // data fetch loading
  if (dataLoading) return <Loading />;

  if (combined.length === 0) {
    return (
      <div className="flex flex-col items-center gap-5 mb-3 lg:mb-6 w-full bg-base-200 p-4 lg:p-5">
        <p className="text-center text-lg text-primary rounded">
          No Submission Yet
        </p>

        <Link to="/assignments" className="btn bg-secondary/90 text-white">
          Let's Explore
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-3 lg:mb-6">
      <AssignmentTable submissions={combined} isSubmitted={true} />
    </div>
  );
};

export default MyAttemptedAssignments;
