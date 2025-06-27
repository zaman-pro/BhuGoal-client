import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const GetTheApp = () => {
  return (
    <section className="flex gap-5 flex-col md:flex-row items-center justify-between w-11/12 mx-auto">
      <div className="flex-1">
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
          Access Learning from Any Device
        </h1>
        <p className="mt-3">
          Enjoy a seamless learning experience with full access to your
          assignments and group activities across all devices.
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
          {/* google play button */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-secondary flex items-center gap-2 px-4 py-2"
          >
            <FaGooglePlay className="text-xl" />
            <span className="text-sm font-semibold">Google Play</span>
          </a>

          {/* app store button */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-secondary flex items-center gap-2 px-4 py-2"
          >
            <FaApple className="text-xl" />
            <span className="text-sm font-semibold">App Store</span>
          </a>
        </div>
      </div>

      <div className="flex-1">
        <img
          src="https://s14.gifyu.com/images/bHiD3.png"
          alt="Hero"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
};

export default GetTheApp;
