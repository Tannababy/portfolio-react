import React from "react";

function Project(props) {
  const { title, description, imageUrl, applink, github } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem;" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt={"Screenshot of ${title}"}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={applink} className="btn btn-primary">
            Link to deployed application
          </a>
          <a href={github} className="btn btn-primary">
            link to Github repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
