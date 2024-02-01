import React from "react";
import Project from "./project";
import preworkguide from "../images/preworkguide.jpeg";
import passwordgenerator from "../images/DemoGif copy.gif";
import readmePic from "../images/Demo-vid copy.gif";

const projectData = [
  {
    key: "prework-guide",
    title: "Prework Study Guide",
    description:
      "A simple html page about study notes made during the preparation for the frontend dev bootcamp.",
    image: preworkguide,
    app: "",
    github: "",
  },
  {
    key: "team-profile-generator",
    title: "Team Profile Generator",
    description: "lore ipsum",
    image: "",
    app: "",
    github: "https://github.com/Tannababy/team-profile-generator",
  },
  {
    key: "readme-generator",
    title: "ReadMe Generator",
    description:
      "An application that a developer can use to dynamically generate a professional README.md file, to focus more time and energy on the main project.",
    image: readmePic,
    github: "https://github.com/Tannababy/ReadMe-file",
  },
  {
    key: "password-generator",
    title: "Password Generator",
    description:
      "An app designed to generate passwords at random based of the criteria selected by the user.",
    image: passwordgenerator,
    app: "https://tannababy.github.io/password-generator/",
    github: "https://github.com/Tannababy/password-generator",
  },
  {
    key: "fitness-forcast",
    title: "Fitness Forecast",
    description:
      "A fitness app for busy professionals that suggests workouts based on the weather conditions.",
    image: "",
    app: "tannababy.github.io/FitForecast/",
    github: "https://github.com/Tannababy/FitForecast",
  },
  {
    key: "work-day-scheduler",
    title: "Work-day Scheduler",
    description: "lore ipsum",
    image: "",
    app: "",
    github: "https://github.com/Tannababy/work-day-scheduler",
  },
  {
    key: "abc",
    title: "abc",
    description: "lore ipsum",
    image: "",
    app: "",
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
              key={project.key}
              title={project.title}
              description={project.description}
              image={project.image}
              app={project.app}
              gitHub={project.github}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectGallery;
