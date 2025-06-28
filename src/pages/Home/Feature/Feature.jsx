import React from "react";
import { Link } from "react-router";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Feature = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
      {/* feature image */}
      <div className="flex-1">
        <img
          src="https://s14.gifyu.com/images/bH6iD.png"
          alt="Feature"
          className="w-full object-contain"
        />
      </div>

      {/* feature content */}
      <div className="flex-1">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
          Core Features at a Glance
        </h2>

        <ul className="space-y-4">
          <li className="flex gap-3">
            <MdKeyboardDoubleArrowRight className="text-primary" />
            <div className="space-y-1">
              <h4 className="font-medium text-sm">Create Assignments</h4>
              <p className="text-xs">
                Assign tasks to your study group in just a few clicks.
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <MdKeyboardDoubleArrowRight className="text-primary" />
            <div className="space-y-1">
              <h4 className="font-medium text-sm">Submit & Track Progress</h4>
              <p className="text-xs">
                Complete assignments and keep track of what's done.
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <MdKeyboardDoubleArrowRight className="text-primary" />
            <div className="space-y-1">
              <h4 className="font-medium text-sm">Grade Your Friends</h4>
              <p className="text-xs">
                Give helpful feedback and support your friends' learning.
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <MdKeyboardDoubleArrowRight className="text-primary" />
            <div className="space-y-1">
              <h4 className="font-medium text-sm">Secure & Friendly</h4>
              <p className="text-xs">
                Every registered user is automatically your study buddy.
              </p>
            </div>
          </li>
        </ul>

        <Link to="/assignments" className="btn btn-soft btn-secondary mt-6">
          More
        </Link>
      </div>
    </section>
  );
};

export default Feature;
