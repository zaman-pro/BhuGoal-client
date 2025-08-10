import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "linear",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.div
      className="mb-3 lg:mb-6 mx-auto px-4 lg:px-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-2xl lg:text-4xl font-bold mb-6 text-center"
        variants={itemVariants}
      >
        About BhuGoal
      </motion.h1>

      <motion.p className="mb-6 leading-relaxed" variants={itemVariants}>
        BhuGoal is a collaborative group-study platform built to make learning
        with friends easier, smarter, and more engaging. We understand that
        studying alone can sometimes feel overwhelming, so we've created a space
        where students can connect, share resources, and support each other in
        achieving their academic goals.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold mb-4"
        variants={itemVariants}
      >
        With <span className="font-bold text-secondary">BhuGoal</span> you can:
      </motion.h2>

      <motion.ul
        className="list-disc list-inside mb-8 space-y-3"
        variants={itemVariants}
      >
        <li>Create or join study groups for any subject.</li>
        <li>Share notes, ideas, and updates in real-time.</li>
        <li>Track progress and stay motivated together.</li>
      </motion.ul>

      <motion.p className="mb-6 leading-relaxed" variants={itemVariants}>
        Our mission is simple — to turn studying into a shared journey instead
        of a solo struggle. Whether you're preparing for an exam, learning
        something new, or just need a push to stay consistent, BhuGoal is here
        to make learning collaborative and enjoyable.
      </motion.p>

      <motion.p
        className="text-lg font-medium text-center italic text-accent"
        variants={itemVariants}
      >
        Learn together. Grow together. That&apos;s the BhuGoal way.
      </motion.p>
    </motion.div>
  );
};

export default About;
