import React from "react";
import ProjectList from "../Projects/ProjectList";
import ProjectCard from "../Projects/ProjectCard";

function ProjectMap() {
  return (
    <div className="container">
          <h1 className="display-5 fw-bold text-blue text-center text-decoration-underline my-4">Projects</h1>
      <div className="row">
        {ProjectList.map((project) => (
          <div key={project.id} className="col-md-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectMap;
