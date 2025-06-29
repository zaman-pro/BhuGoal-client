import React from "react";
import AssignmentForm from "../../components/AssignmentForm/AssignmentForm";

const CreateAssignment = () => {
  const handleCreateAssignment = (assignmentData) => {
    console.log(assignmentData);
  };
  return (
    <div>
      <AssignmentForm onSubmit={handleCreateAssignment} />
    </div>
  );
};

export default CreateAssignment;
