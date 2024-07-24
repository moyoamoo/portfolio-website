const Skills = ({ skills }) => {
  return (
    <>
      <div className="skills">
        {skills.map((skill) => {
          return <span key={skill}>{skill}</span>;
        })}
      </div>
    </>
  );
};

export default Skills;
