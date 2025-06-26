import React from "react";

const Faq = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-5 w-11/12 mx-auto">
      {/* faq left content */}
      <div className="flex-1 h-[450px] flex items-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      {/* faq right content */}
      <div className="flex-1">
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              Do I need to invite friends?
            </div>
            <div className="collapse-content text-sm">
              <p>No! Every user is part of your study network.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              Can I create multiple assignments?
            </div>
            <div className="collapse-content text-sm">
              <p>Yes. You can create as many assignments as needed.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              How do I grade someone else's assignment?
            </div>
            <div className="collapse-content text-sm">
              <p>
                Once your friend submits an assignment, you'll get an option to
                grade it.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              Is this app free to use?
            </div>
            <div className="collapse-content text-sm">
              <p>Yes, it's completely free for educational use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
