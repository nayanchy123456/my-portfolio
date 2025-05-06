import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialLinks;
