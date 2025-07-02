import React from "react";
import { Link } from "react-router";

const AssignmentTable = ({ submissions, isSubmitted }) => {
  return (
    <div>
      <table className="table w-full text-sm md:text-base">
        <thead>
          <tr>
            <th>SN</th>
            <th className="hidden lg:table-cell">Img</th>
            <th>Title</th>
            <th>Status</th>
            <th className="hidden md:table-cell">Full Marks</th>
            <th className="hidden lg:table-cell">
              {isSubmitted ? "Your Marks" : "Examinee"}
            </th>
            <th className="hidden lg:table-cell">
              {" "}
              {isSubmitted ? "Feedback" : "Action"}
            </th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => {
            return (
              <tr key={submission._id} className="hover:bg-accent/10">
                {/* sn */}
                <td>{index + 1}</td>

                <td className="hidden lg:table-cell">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img
                        src={submission.assignmentDetails?.thumbnail}
                        alt={submission.assignmentDetails?.title}
                      />
                    </div>
                  </div>
                </td>

                {/* title */}
                <td>
                  <Link
                    to={`/assignment-details/${submission.assignmentDetails?._id}`}
                  >
                    <h1 className="font-bold text-accent text-left">
                      {submission.assignmentDetails?.title}
                    </h1>
                  </Link>
                </td>

                {/* status */}
                <td className="capitalize">{submission.status}</td>

                {/* full marks */}
                <td className="hidden md:table-cell">
                  {submission.assignmentDetails?.marks}
                </td>

                {isSubmitted ? (
                  <>
                    {/* your marks */}
                    <td className="hidden lg:table-cell">
                      {submission.obtainedMarks !== undefined
                        ? submission.obtainedMarks
                        : "-"}
                    </td>

                    {/* feedback */}
                    <td className="hidden lg:table-cell">
                      {submission.feedback || "-"}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="hidden lg:table-cell">Examinee</td>
                    <td className="hidden lg:table-cell">
                      <button className="btn bg-secondary/80 hover:bg-accent text-white">
                        Give Mark
                      </button>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentTable;
