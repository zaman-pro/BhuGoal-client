import React from "react";
import AssignmentForm from "../../components/AssignmentForm/AssignmentForm";

const CreateAssignment = () => {
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const assignmentData = Object.fromEntries(formData.entries());

    console.log(assignmentData);
  };
  return (
    <div>
      <AssignmentForm handleCreateAssignment={handleCreateAssignment} />
    </div>
  );
};

export default CreateAssignment;
