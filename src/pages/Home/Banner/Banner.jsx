import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Banner = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.section
      className="flex gap-5 flex-col md:flex-row items-center justify-between overflow-hidden"
      initial="hidden"
      animate={imgLoaded ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {},
      }}
    >
      {/* banner content */}
      <motion.div
        className="flex-1 will-change-transform"
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
          Empowering You to Learn and Grow Together
        </h1>
        <p className="mt-3 ml-3">1000+ Assignments Created Together</p>
        <motion.div
          className="inline-block mt-3 ml-3"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ display: "inline-block" }}
        >
          <Link to="/assignments" className="btn btn-soft btn-secondary">
            Get Started
          </Link>
        </motion.div>
      </motion.div>

      {/* banner image */}
      <motion.div
        className="flex-1 will-change-transform"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <img
          src="https://s14.gifyu.com/images/bH4BP.png"
          alt="Hero"
          className="w-full object-contain"
          onLoad={() => setImgLoaded(true)}
        />
      </motion.div>
    </motion.section>
  );
};

export default Banner;
