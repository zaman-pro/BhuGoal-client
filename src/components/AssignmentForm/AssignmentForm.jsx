import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const AssignmentForm = ({
  assignment,
  handleCreateAssignment,
  handleUpdateAssignment,
  isUpdateAssignment,
}) => {
  const { user } = use(AuthContext);

  return (
    <div className="p-3 rounded-md border border-secondary/30 shadow-lg overflow-hidden">
      {isUpdateAssignment ? (
        <h2 className="text-3xl font-bold mb-2 md:mb-6 text-center text-secondary">
          Update Assignment
        </h2>
      ) : (
        <h2 className="text-3xl font-bold mb-2 md:mb-6 text-center text-secondary">
          Create New Assignment
        </h2>
      )}
      <form
        onSubmit={
          isUpdateAssignment ? handleUpdateAssignment : handleCreateAssignment
        }
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* thumbnail */}
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold">Thumbnail</label>
            <input
              type="text"
              name="thumbnail"
              placeholder="Thumbnail"
              className="input focus:outline-none w-full"
              required
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
              required
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
              required
            >
              <option defaultValue="">{assignment?.difficultyLevel}</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </fieldset>

          {/* due date */}
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold">Due Date</label>
            <input
              type="date"
              name="dueDate"
              className="input focus:outline-none w-full"
              defaultValue={assignment?.dueDate}
              required
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
              required
              defaultValue={assignment?.healthStatus}
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
              required
              defaultValue={user?.email}
              //   disabled
            />
          </fieldset>

          {/* user name */}
          {/* <fieldset className="fieldset">
            <label className="label text-sm font-semibold">User Name</label>
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              className="input focus:outline-none w-full"
              required
              defaultValue={user?.displayName || "Unknown"}
            />
          </fieldset> */}
        </div>

        {/* description */}
        <fieldset className="fieldset">
          <label className="label text-sm font-semibold">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea focus:outline-none w-full"
            required
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
