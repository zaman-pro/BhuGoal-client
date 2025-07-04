import React from "react";
import AssignmentForm from "../../components/AssignmentForm/AssignmentForm";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CreateAssignment = () => {
  const axiosSecure = useAxiosSecure();
  const handleCreateAssignment = (assignmentData) => {
    const toastId = "createToast";
    toast.dismiss();
    toast.loading("Creating", { id: toastId });

    axiosSecure
      .post("/assignments", assignmentData)
      .then((res) => {
        if (!res.data.insertedId) {
          toast.error("Creation failed", { id: toastId });
        }
        toast.success("Assignment created successfully", { id: toastId });
      })
      .catch((error) => {
        console.log(error);
        toast.error("creating failed", { id: toastId });
      });
  };
  return (
    <div className="mb-3 lg:mb-6">
      <AssignmentForm onSubmit={handleCreateAssignment} />
    </div>
  );
};

export default CreateAssignment;
