import Project from "./Project";
import { projects } from "../projects";

const Projects = () => {
  return (
    <>
      <section className="projects-container" id="projects">
        <h3>Projects</h3>
        <div className="projects">
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
      </section>
    </>
  );
};

export default Projects;
