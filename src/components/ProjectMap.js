import React from "react";
import ProjectList from "./ProjectList";
import ProjectCard from "./ProjectCard";

function ProjectMap() {
  return (
    <div className="container">
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
