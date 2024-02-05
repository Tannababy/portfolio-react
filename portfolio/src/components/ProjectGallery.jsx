import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from JSON file
    fetch("/src/datasets/projectData.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <h1>Project Gallery</h1>
      {projects.map((project) => (
        <div key={project.key}>
          <Link to={`/projects/${project.key}`}> See More </Link>
          {project.image && (
            <img src={`./images/${project.image}`} alt={project.title} />
          )}
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          {project.app && (
            <a href={project.app} target="_blank" rel="noopener noreferrer">
              View App
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectGallery;
