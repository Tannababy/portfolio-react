import React from "react";

function Project(props) {
  const { title, description, imageUrl, link } = props;
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
          <a href={link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
