import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //fetch project data from JSON file
    fetch("/src/datasets/projectData.json") // Update the path to your JSON file
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <h1>Project Gallery</h1>
      {projects.map((project) => {
        <div key={project.key}>
          <link to={`/projects/${project.key}`}> See More </link>
          <img src={`${project.image}.jpeg`} alt={project.title} />
          <h3>{project.title}</h3>
        </div>;
      })}
    </div>
  );
}

export default ProjectGallery;
