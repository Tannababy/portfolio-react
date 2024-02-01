import React from "react";
import Project from "./project";

const projectData = [
  {
    key: "",
    title: "abc",
    description: "lore ipsum",
    imageUrl: "",
    link: "",
  },
  {
    key: "",
    title: "abc",
    description: "lore ipsum",
    imageUrl: "",
    link: "",
  },
  {
    key: "",
    title: "abc",
    description: "lore ipsum",
    imageUrl: "",
    link: "",
  },
  {
    key: "",
    title: "abc",
    description: "lore ipsum",
    imageUrl: "",
    link: "",
  },
  {
    key: "",
    title: "abc",
    description: "lore ipsum",
    imageUrl: "",
    link: "",
  },
  {
    key: "",
    title: "abc",
    description: "lore ipsum",
    imageUrl: "",
    link: "",
  },
  {
    key: "",
    title: "abc",
    description: "lore ipsum",
    imageUrl: "",
    link: "",
  },
];

function ProjectGallery() {
  return (
    <div>
      <ul>
        {projectData.map((project) => {
          return (
            <Project title={project.title} description={project.description} />
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectGallery;
