import "../css/AboutMe.scss";
import eightBitMoyo from "../assets/8bitmoyo.png";

const AboutMe = () => {
  return (
    <>
      <section className="about-me" id="about-me">
        <div className="about-me-container">
          <img src={eightBitMoyo} alt="8 bit image of Moyo" />
          <h1>Hi, I'm Moyo</h1>
          <h2>Full Stack Developer</h2>
          <div className="about-me-icons">
            <a href="https://github.com/moyoamoo" target="_blank">
              <i className="nes-icon github is-medium"></i>
            </a>
            <a href="https://www.linkedin.com/in/moyo-amoo-peters-97742b2a2">
              <i className="nes-icon linkedin is-medium"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
