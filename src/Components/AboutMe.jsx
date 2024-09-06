import "../css/AboutMe.scss";
import eightBitMoyo from "../assets/8bitmoyo.png";

const AboutMe = () => {
  return (
    <>
      <section className="about-me" id="about-me">
        <div className="about-me-container">
          <img src={eightBitMoyo} alt="8 bit image of Moyo" />
          <h1>Hi, I'm Moyo</h1>
          <h2>&lt;Full Stack Developer/&gt;</h2>
          <p>
            Specialising in JavaScript, React, TypeScript, Node and SQL
            databases
          </p>
          <p>
            Recent The Jump Digital School's 30 week Full-Stack Software
            Engineer bootmap graduate and Code Sensei @ Code Ninjas
          </p>
          <p>
            Currently looking for Full Time Software Development role. If you
            have any questions or want to say hi, pop me an email at{" "}
            <a href="mailto:moyo@hotmail.com" className="impact">
              moyo.amoo@hotmail.com
            </a>
          </p>
          <div className="about-me-icons">
            <a href="https://github.com/moyoamoo" target="_blank">
              <i className="nes-icon github is-medium"></i>
            </a>
            <a href="https://www.linkedin.com/in/moyo-amoo-peters-97742b2a2">
              <i className="nes-icon linkedin is-medium"></i>
            </a>
            <a className="menu-link resume-btn">Resume</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
