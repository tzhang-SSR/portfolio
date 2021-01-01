import React from "react";

const ProjectCard = (props) => {
  return props.title ? (
    <div className="card col-md-4 col-xs-12 project-card pa4 br3">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          className="card-img-top project-cover"
          src={props.src}
          alt="project cover"
        />
      </a>
      <div className="card-body">
        <div className="f2 ma0">{props.title}</div>
        <p>{props.text}</p>
      </div>
    </div>
  ) : (
    <div className="card col-md-4 col-xs-12 project-card"></div>
  );
};

export default ProjectCard;
