import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import AssignmentForm from "../../components/AssignmentForm/AssignmentForm";
import Loading from "../Loading/Loading";
import api from "../../api/api";

const UpdateAssignment = () => {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const navigate = useNavigate();

  // fetch by id
  useEffect(() => {
    api(`/assignments/${id}`)
      .then((res) => {
        setAssignment(res.data);
        setDataLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.dismiss();
        toast.error("Failed to load assignment");
        setDataLoading(false);
      });
  }, [id]);

  const handleUpdateAssignment = (updatedData) => {
    const toastId = "updateToast";
    toast.dismiss();
    toast.loading("Updating assignment", { id: toastId });

    api
      .patch(`/assignments/${id}`, updatedData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Updated successfully", { id: toastId });
          navigate("/assignments");
        } else {
          toast.error("No changes made", { id: toastId });
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Update failed", { id: toastId });
      });
  };

  if (dataLoading) {
    return <Loading />;
  }

  if (!assignment) {
    return (
      <div className="text-center mt-10 text-red-500">
        Assignment not found.
      </div>
    );
  }

  return (
    <div className="mb-3 lg:mb-6">
      <AssignmentForm
        assignment={assignment}
        isUpdateAssignment={true}
        onSubmit={handleUpdateAssignment}
      />
    </div>
  );
};

export default UpdateAssignment;
