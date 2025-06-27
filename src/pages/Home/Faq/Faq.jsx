import React from "react";

const faqData = [
  {
    question: "Do I need to invite friends?",
    answer: "No! Every user is part of your study network.",
  },
  {
    question: "Can I create multiple assignments?",
    answer: "Yes. You can create as many assignments as needed.",
  },
  {
    question: "How do I grade someone else's assignment?",
    answer:
      "Once your friend submits an assignment, you'll get an option to grade it.",
  },
  {
    question: "Is this app free to use?",
    answer: "Yes, it's completely free for educational use.",
  },
];

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
          {faqData.map((item, index) => (
            <div key={index} className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title font-medium">{item.question}</div>
              <div className="collapse-content text-sm">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
