import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaWhatsapp, FaPhone, FaGlobe } from "react-icons/fa";

const contactInfos = [
  {
    id: 1,
    title: "Email",
    value: "example@gmail.com",
    icon: <FaEnvelope />,
    textColor: "text-white",
  },
  {
    id: 2,
    title: "WhatsApp number",
    value: "+256 359 556",
    icon: <FaWhatsapp />,
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Telephone",
    value: "+123 456 789",
    icon: <FaPhone />,
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Website",
    value: "https://bhugoal.netlify.app",
    icon: <FaGlobe />,
    textColor: "text-white",
  },
];

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    toast.success("Your message has been sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="mx-auto mb-3 lg:mb-6 px-4 lg:px-5">
      <div className="mb-3 lg:mb-6 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold leading-tight ">
          Contact Us
        </h2>
      </div>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
        {contactInfos.map(({ id, title, value, icon, textColor }) => (
          <div
            key={id}
            className="relative rounded shadow p-5 flex flex-col justify-center"
          >
            {/* Icon circle */}
            <div
              className={`absolute -top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-secondary ${textColor} shadow-md`}
            >
              {icon}
            </div>

            <h4 className="font-semibold lg:text-xl mb-1">{title}</h4>
            <p className="break-words text-sm lg:text-base">{value}</p>
          </div>
        ))}
      </div>

      <div className="mb-3 lg:mb-6 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold leading-tight ">
          You Can Write To Us
        </h2>

        <small className="">
          We'd love to hear from you. Please fill out the form below and we'll
          get in touch.
        </small>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-secondary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-secondary"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-secondary"
        />

        <button
          type="submit"
          className="w-full bg-secondary hover:bg-accent transition text-white font-semibold py-3 px-6 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
