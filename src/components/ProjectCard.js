import React from 'react'

const ProjectCard = (props) => {
    return (
        props.title
            ? <div className="card col-md-4 col-xs-12 project-card">
                <a href={props.link} target="_blank"  rel="noopener noreferrer"><img className="card-img-top project-cover" src={props.src} alt="project cover" /></a>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
            : <div className="card col-md-4 col-xs-12 project-card"></div>
    )
}

export default ProjectCard;