import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import "./ProjectCard.css"

function ProjectCard({ project }) {
  const toolsList = project.tools.map((tool, index) => (
    <Badge id="tag" key={index} bg="secondary" className="me-1">
      {tool}
    </Badge>
  ));

  return (
    <div className="card">
      <img className="card-img-top project-img" src={project.image} alt={project.name} />
      <div className="card-body">
        <h3 className="card-title">{project.name}</h3>
        <p className="card-text">{project.description}</p>
        {toolsList}
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-secondary"
            >
              View Repo
            </a>
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-secondary"
            >
              View App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
