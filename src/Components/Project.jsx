import "../css/project.scss";
import Skills from "./Skills";
import Image from "./Image";

const Project = ({
  title,
  description,
  skills,
  linkName,
  subHeading,
  images,
}) => {
  return (
    <>
      <div className="project">
        <div className="project-wrapper">
          <h4>{title}</h4>
          <span>{subHeading}</span>
          <Image images={images} />
          <p>{description}</p>
          <Skills skills={skills} />
          <div className="view-project">
            <ul>
              {linkName.map((link) => {
                return (
                  <li key={link.name}>
                    <a href={link.link} target="_blank">
                      {link.name}
                      
                    </a>
            
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
