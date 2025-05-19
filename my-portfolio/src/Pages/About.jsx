import { motion } from "framer-motion";
import SocialLinks from "../Components/SocialLinks";
import "./About.css";

import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

function About() {
  return (
    <section className="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <motion.p 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm a passionate full-stack developer with hands-on experience in building
          dynamic web applications using Java, Spring Boot, React, and relational databases.
        </motion.p>

        <motion.p 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I enjoy solving problems, writing clean code, and continuously learning to improve my skills.
          In my free time, I work on mini-projects to explore new technologies and sharpen my development abilities.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Tech Stack:
        </motion.h3>

        <motion.div 
          className="tech-stack-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: <FaJava />, label: "Java" },
            { icon: <SiSpringboot />, label: "Spring Boot" },
            { icon: <FaHtml5 />, label: "HTML5" },
            { icon: <FaCss3Alt />, label: "CSS3" },
            { icon: <FaJs />, label: "JavaScript" },
            { icon: <FaReact />, label: "React JS" },
            { icon: <FaDatabase />, label: "MySQL" },
          ].map(({ icon, label }, i) => (
            <motion.div
              key={i}
              className="tech-card"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00ffff" }}
              transition={{ type: 'spring', stiffness: 300 }}
              title={label}
            >
              <div className="tech-icon">{icon}</div>
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <SocialLinks />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
