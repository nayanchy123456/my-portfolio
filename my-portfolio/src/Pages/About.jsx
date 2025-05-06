import SocialLinks from "../Components/SocialLinks";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I'm a passionate full-stack developer with hands-on experience in building
          dynamic web applications using Java, Spring Boot, React, and relational databases.
        </p>
        <p>
          I enjoy solving problems, writing clean code, and continuously learning to improve my skills.
          In my free time, I work on mini-projects to explore new technologies and sharpen my development abilities.
        </p>

        <h3>Tech Stack:</h3>
        <ul>
          <li>Java, Spring Boot</li>
          <li>HTML,CSS,JS</li>
          <li>React JS</li>
          <li>MySQL</li>
          <li>Data Structures & Algorithms</li>
        </ul>
        <SocialLinks/>
      </div>
    </section>
  );
}

export default About;
