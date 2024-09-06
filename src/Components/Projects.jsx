import Project from "./Project";
import { projects } from "../projects";
import { hackathons } from "../hackathon";
import { challenges } from "../challenges";

const Projects = () => {
  return (
    <>
      <section className="projects-container" id="projects">
        <h3>What I've been working on</h3>
        <div className="projects">
          <h4 className="subheading">&lt;Projects/&gt;</h4>
          <div className="project-container">
            {projects.map((project) => {
              return (
                <Project
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  linkName={project.linkName}
                  subHeading={project.subHeading}
                  images={project.images}
                />
              );
            })}
          </div>
        </div>
        <div className="projects">
          <h4 className="subheading">&lt;Hackathons/&gt;</h4>
          <div className="project-container">
            {hackathons.map((project) => {
              return (
                <Project
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  linkName={project.linkName}
                  subHeading={project.subHeading}
                  images={project.images}
                />
              );
            })}
          </div>
        </div>
        <div className="projects">
          <h4 className="subheading">&lt;Coding Challenges/&gt;</h4>
          <div className="project-container">
            {challenges.map((project) => {
              return (
                <Project
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  linkName={project.linkName}
                  subHeading={project.subHeading}
                  images={project.images}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
