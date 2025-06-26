import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="flex gap-5 flex-col md:flex-row items-center justify-between w-11/12 mx-auto">
      {/* banner text content*/}
      <div className="flex-1">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight ">
          Empowering You to Learn and Grow Together
        </h1>
        <p className="mt-3">1000+ Assignments Created Together</p>
        <Link to="/assignments" className="btn btn-soft btn-secondary mt-3">
          Get Started
        </Link>
      </div>

      {/* banner image */}
      <div className="flex-1">
        <img
          src="https://s14.gifyu.com/images/bH4BP.png"
          alt="Hero"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
