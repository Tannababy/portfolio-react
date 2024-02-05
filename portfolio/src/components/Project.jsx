import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Project() {
  const { projectKey } = useParams();
  const [Project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project data from the JSON file
    fetch("/src/datasets/projectData.json") //
      .then((response) => response.json())
      .then((data) => {
        const selectedProject = data.find(
          (project) => project.key.toString() === projectKey
        );
        setProject(selectedProject);
      })
      .catch((error) =>
        console.error("Error fetching project details:", error)
      );
  }, [projectKey]);

  if (!Project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`./images/${Project.image}.jpg`}
          className="card-img-top"
          alt={Project.title}
        />
        <div className="card-body">
          <h5 className="card-title">{Project.title}</h5>
          <p className="card-text">{Project.description}</p>
          <a
            href={Project.app}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View application
          </a>
          <a
            href={Project.gitHub}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
