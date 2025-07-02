import axios from "axios";
import React, { useEffect, useState } from "react";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";
import { Link } from "react-router";
import Loading from "../Loading/Loading";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  // data fetch
  useEffect(() => {
    setDataLoading(true);
    axios("http://localhost:3000/assignments")
      .then((res) => setAssignments(res.data))
      .catch((error) => console.log(error))
      .finally(() => setDataLoading(false));
  }, []);

  // data fetch loading
  if (dataLoading) return <Loading />;

  return (
    <div className="mb-3 lg:mb-6">
      {/* conditional render  */}
      {assignments.length === 0 ? (
        <div className="flex flex-col items-center gap-5 mb-3 lg:mb-6 w-full bg-base-200 p-4 lg:p-5">
          <p className="text-center text-lg text-primary rounded">
            No Assignment Found
          </p>

          <Link
            to="/create-assignment"
            className="btn bg-secondary/90 text-white"
          >
            Let's Create
          </Link>
        </div>
      ) : (
        // assignments cards
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              setAssignments={setAssignments}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Assignments;
