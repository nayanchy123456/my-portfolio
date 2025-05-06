import "./Home.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import SocialLinks from "../Components/SocialLinks";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Nayan Chaudhary</h1>
        <h2>Java | Spring Boot | React Developer</h2>
        <p>
          I build responsive web apps using modern technologies. Welcome to my portfolio!
        </p>
        <Link to="/projects" className="btn">View Projects</Link>
        <SocialLinks/>
      </div>
    </section>
  );
}

export default Home;
