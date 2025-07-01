import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const SubmitAssignmentModal = ({ assignmentId, onClose, onSuccessSubmit }) => {
  const { user } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const submissionLink = formData.get("submissionLink")?.trim();
    const submissionNote = formData.get("submissionNote")?.trim();

    if (!submissionLink) {
      toast.dismiss();
      return toast.error("Google Docs link is required", {
        id: "docLink-error",
      });
    }

    const submissionData = {
      assignmentId,
      userEmail: user?.email,
      docLink: submissionLink,
      note: submissionNote || "",
      status: "pending",
    };

    setSubmitting(true);
    toast.dismiss();

    toast
      .promise(
        axios.post("http://localhost:3000/submissions", submissionData),
        {
          loading: "Submitting assignment...",
          success: () => {
            onSuccessSubmit();
            return "Assignment submitted!";
          },
          error: "Failed to submit assignment.",
        },
        {
          id: "submit-assignment",
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-base-100 p-5 rounded-lg w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Submit Assignment
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* submission Link */}
          <fieldset className="fieldset">
            <input
              autoFocus
              type="url"
              name="submissionLink"
              placeholder="Google Docs Link"
              className="input focus:outline-none w-full"
              required
            />
          </fieldset>

          {/* submission note */}
          <fieldset className="fieldset">
            <textarea
              name="submissionNote"
              placeholder="Quick Note (optional)"
              className="textarea focus:outline-none w-full"
            />
          </fieldset>

          <div className="flex justify-end gap-3 mt-2">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-secondary text-white"
              disabled={submitting}
            >
              {submitting ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitAssignmentModal;
