import "./Home.css";
import { Link } from "react-router-dom";
import SocialLinks from "../Components/SocialLinks";
import profilePic from "../assets/nayan.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section className="home">
      <motion.div 
        className="left-section"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={profilePic} alt="Nayan Chaudhary" className="profile-pic" />
      </motion.div>

      <motion.div 
        className="right-section"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm{" "}
          <span className="highlight">
            <Typewriter
              words={["Nayan Chaudhary"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <h2>Java | Spring Boot | React Developer</h2>
        <p>
          Passionate about building full-stack web apps that are fast, responsive, and user-friendly.
        </p>
        <Link to="/projects" className="btn">🚀 View Projects</Link>
        <SocialLinks />
      </motion.div>
    </section>
  );
}

export default Home;
