import React from "react";
import Project from "./project";
import preworkguide from "../images/preworkguide.jpeg";

const projectData = [
  {
    key: "",
    title: "Prework Study Guide",
    description:
      "A simple html page about study notes made during the preparation for the frontend dev bootcamp.",
    imageUrl: preworkguide,
    link: "",
  },
  {
    key: "",
    title: "Team Profile Generator",
    description: "lore ipsum",
    imageUrl: "",
    applink: "",
    github: "",
  },
  {
    key: "",
    title: "ReadMe generator",
    description:
      "An application that a developer can use to dynamically generate a professional README.md file, to focus more time and energy on the main project.",
    imageUrl: "",
    github: "https://github.com/Tannababy/ReadMe-file",
  },
  {
    key: "",
    title: "Password generator",
    description:
      "An app designed to generate passwords at random based of the criteria selected by the user.",
    imageUrl: "",
    applink: "https://tannababy.github.io/password-generator/",
    github: "https://github.com/Tannababy/password-generator",
  },
  {
    key: "",
    title: "Fitness forecast",
    description:
      "A fitness app for busy professionals that suggests workouts based on the weather conditions.",
    imageUrl: "",
    applink: "tannababy.github.io/FitForecast/",
    github: "https://github.com/Tannababy/FitForecast",
  },
  {
    key: "",
    title: "abc",
    description: "lore ipsum",
    imageUrl: "",
    applink: "",
    github: "",
  },
  {
    key: "",
    title: "abc",
    description: "lore ipsum",
    imageUrl: "",
    applink: "",
    github: "",
  },
];

function ProjectGallery() {
  return (
    <div>
      <ul>
        {projectData.map((project) => {
          return (
            <Project
              title={project.title}
              description={project.description}
              image={project.imageUrl}
              app={project.applink}
              gitHub={project.github}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectGallery;
