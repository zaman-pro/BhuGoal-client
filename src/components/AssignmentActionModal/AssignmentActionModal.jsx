import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AssignmentActionModal = ({
  mode = "submit",
  assignmentId,
  submissionData,
  onClose,
  onSuccessSubmit,
  onSuccessMark,
}) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (mode === "submit") {
      const docLink = formData.get("submissionLink")?.trim();
      const note = formData.get("submissionNote")?.trim();

      if (!docLink) {
        toast.dismiss();
        return toast.error("Google Docs link is required", {
          id: "docLink-error",
        });
      }

      const data = {
        assignmentId,
        userEmail: user?.email,
        docLink,
        note: note || "",
        status: "pending",
      };

      setLoading(true);
      toast.dismiss();

      toast
        .promise(axios.post("http://localhost:3000/submissions", data), {
          loading: "Submitting...",
          success: () => {
            onSuccessSubmit?.();
            return "Assignment submitted!";
          },
          error: "Submission failed",
        })
        .finally(() => setLoading(false));
    }

    if (mode === "mark") {
      const obtainedMarks = formData.get("obtainedMarks");
      const feedback = formData.get("feedback");

      if (!obtainedMarks) {
        toast.dismiss();
        return toast.error("Marks are required", { id: "mark-error" });
      }

      const update = {
        obtainedMarks: parseInt(obtainedMarks),
        feedback: feedback || "",
        status: "completed",
      };

      setLoading(true);
      toast.dismiss();

      toast
        .promise(
          axios.patch(
            `http://localhost:3000/submissions/${submissionData._id}`,
            update
          ),
          {
            loading: "Marking...",
            success: () => {
              onSuccessMark?.();
              return "Assignment marked!";
            },
            error: "Failed to mark assignment",
          }
        )
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-base-100 p-5 rounded-lg w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4 text-center">
          {mode === "submit" ? "Submit Assignment" : "Give Marks"}
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === "submit" && (
            <>
              <input
                autoFocus
                type="url"
                name="submissionLink"
                placeholder="Google Docs Link"
                className="input focus:outline-none w-full"
                required
              />
              <textarea
                name="submissionNote"
                placeholder="Quick Note (optional)"
                className="textarea focus:outline-none w-full"
              />
            </>
          )}

          {mode === "mark" && (
            <>
              <div className="text-sm">
                <p>
                  <span className="font-semibold">Docs Link:</span>{" "}
                  <a
                    href={submissionData?.docLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Document
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Note:</span>{" "}
                  {submissionData?.note || "-"}
                </p>
              </div>

              <input
                name="obtainedMarks"
                type="number"
                placeholder="Marks"
                className="input focus:outline-none w-full"
                required
              />
              <textarea
                name="feedback"
                placeholder="Feedback (optional)"
                className="textarea focus:outline-none w-full"
              />
            </>
          )}

          <div className="flex justify-end gap-3 mt-2">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className={`btn ${
                mode === "mark" ? "btn-success" : "bg-secondary text-white"
              }`}
              disabled={loading}
            >
              {loading
                ? mode === "mark"
                  ? "Submitting..."
                  : "Submitting..."
                : mode === "mark"
                ? "Submit Marks"
                : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignmentActionModal;
