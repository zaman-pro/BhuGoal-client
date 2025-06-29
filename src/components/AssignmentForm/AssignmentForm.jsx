import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const AssignmentForm = ({ assignment, isUpdateAssignment, onSubmit }) => {
  const { user } = use(AuthContext);

  const [startDate, setStartDate] = useState(() => {
    if (isUpdateAssignment && assignment?.dueDate) {
      return new Date(assignment.dueDate);
    }
    return new Date();
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const assignmentData = Object.fromEntries(formData.entries());

    // Manual validation fields with custom labels
    const requiredFields = {
      thumbnail: "Thumbnail URL",
      title: "Title",
      difficultyLevel: "Difficulty Level",
      dueDate: "Due Date",
      marks: "Marks",
      description: "Description",
    };

    for (const field in requiredFields) {
      if (!assignmentData[field]?.trim()) {
        toast.dismiss();
        return toast.error(`${requiredFields[field]} is required`, {
          id: "required-error",
        });
      }
    }

    // validate marks
    const marksNumber = parseInt(assignmentData.marks, 10);
    if (isNaN(marksNumber) || marksNumber < 1) {
      toast.dismiss();
      return toast.error("Marks must be at least 1", { id: "marks-error" });
    }
    assignmentData.marks = marksNumber;

    // check due date is not in the past
    if (!isUpdateAssignment) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const selectedDate = new Date(startDate);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        toast.dismiss();
        return toast.error("Past dates not allowed", { id: "date-error" });
      }
    }

    // due date
    assignmentData.dueDate = startDate;

    // need to set manually if it's disable
    assignmentData.userEmail = user?.email;

    onSubmit(assignmentData);
  };

  return (
    <div className="p-3 rounded-md border border-secondary/30 shadow-lg overflow-hidden">
      <h2 className="text-3xl font-bold mb-2 md:mb-6 text-center text-secondary">
        {isUpdateAssignment ? "Update Assignment" : "Create New Assignment"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* thumbnail */}
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold">Thumbnail</label>
            <input
              type="text"
              name="thumbnail"
              placeholder="Thumbnail"
              className="input focus:outline-none w-full"
              defaultValue={assignment?.thumbnail}
            />
          </fieldset>

          {/* title */}
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input focus:outline-none w-full"
              defaultValue={assignment?.title}
            />
          </fieldset>

          {/* difficulty level */}
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold">
              Difficulty Level
            </label>
            <select
              name="difficultyLevel"
              className="select focus:outline-none w-full"
              defaultValue={assignment?.difficultyLevel || ""}
            >
              <option value="" disabled>
                Select difficulty
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </fieldset>

          {/* due date */}
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold">Due Date</label>
            <DatePicker
              type="date"
              name="dueDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={!isUpdateAssignment ? new Date() : null}
              className="input focus:outline-none w-full"
              dateFormat="yyyy-MM-dd"
            />
          </fieldset>

          {/* marks */}
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold">Marks</label>
            <input
              type="text"
              name="marks"
              placeholder="Marks"
              className="input focus:outline-none w-full"
              defaultValue={assignment?.marks}
            />
          </fieldset>

          {/* user email */}
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold">User Email</label>
            <input
              type="email"
              name="userEmail"
              placeholder="User Email"
              className="input focus:outline-none w-full"
              defaultValue={user?.email}
              disabled
            />
          </fieldset>
        </div>

        {/* description */}
        <fieldset className="fieldset">
          <label className="label text-sm font-semibold">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea focus:outline-none w-full"
            defaultValue={assignment?.description}
          />
        </fieldset>

        <button type="submit" className="btn bg-secondary/90 text-white w-full">
          {isUpdateAssignment ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default AssignmentForm;
