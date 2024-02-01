import React from "react";

function Project(props) {
  const { title, description, image, app, github } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem;" }}>
        <img
          src={image}
          className="card-img-top"
          alt={`Screenshot of ${title}`}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={app} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View application
          </a>
          <a href={github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
