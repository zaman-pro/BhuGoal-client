import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary transition"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary transition"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary transition"
      >
        <FaGithub size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
