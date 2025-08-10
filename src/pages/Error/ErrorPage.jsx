import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/Animation - 1748126991659.json";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[500px]">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      <Link to="/" className="btn btn-outline btn-secondary">
        Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
