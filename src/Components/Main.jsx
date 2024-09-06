import About from "./About";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

import Projects from "./Projects";

const Main = () => {
  return (
    <>
      <main>
        <AboutMe />
        <Projects />
        {/* <About/> */}
        <ContactMe />
        
      </main>
    </>
  );
};

export default Main;
