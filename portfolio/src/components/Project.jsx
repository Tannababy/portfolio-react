import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Project = ({ projects }) => {
  const { key } = useParams();
  const selectedProject = projects.find((project) => project.key === key);

  if (!selectedProject) {
    return <div> Project not found </div>;
  }

  return (
    <div>
      <div className="card" style={{ width: "100px;" }}>
        <img
          src={`./images/${selectedProject.image}.jpg`}
          className="card-img-top"
          alt={selectedProject.title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={selectedProject.app}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View application
          </a>
          <a
            href={selectedProject.gitHub}
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
};

export default Project;
