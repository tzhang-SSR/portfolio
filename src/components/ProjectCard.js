import React from "react";

const ProjectCard = (props) =>
  <div className="project-card pa4 br3 grow">
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img
        className="card-img-top card-cover"
        src={props.src}
        alt="project cover"
      />
    </a>
    <div className="card-body">
      <div className="f3 ma0 b">{props.title}</div>
      <p className="tl">{props.text}</p>
    </div>
  </div>

export default ProjectCard;
