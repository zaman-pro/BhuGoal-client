import React from "react";
import AssignmentForm from "../../components/AssignmentForm/AssignmentForm";
import axios from "axios";
import toast from "react-hot-toast";

const CreateAssignment = () => {
  const handleCreateAssignment = (assignmentData) => {
    console.log(assignmentData);

    const toastId = "createToast";
    toast.dismiss();
    toast.loading("Creating", { id: toastId });

    axios
      .post("http://localhost:3000/assignments", assignmentData)
      .then((res) => {
        console.log(res.data);

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
