import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const jsonUrl = "/datasets/projectData.json";
    console.log("Fetching:", jsonUrl);
    // Fetch project data from JSON file
    fetch("jsonUrl")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <h1>Project Gallery</h1>
      {projects.map((project) => (
        <div key={project.key}>
          {/* Display project information */}
          {project.image && (
            <img src={`./images/${project.image}`} alt={project.title} />
          )}
          {/* {project.image && (
            <img
              src={process.env.PUBLIC_URL + project.image}
              alt={project.title}
            />
          )} */}
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          {/* Link to project details page */}
          {/* <Link to={`/projects/${project.key}`}>See More</Link> */}
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
          <Routes>
            <Route path="/:projectKey" element={<Project />} />
          </Routes>
        </div>
      ))}
    </div>
  );
}

export default ProjectGallery;
