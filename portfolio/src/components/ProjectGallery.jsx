import Project from "./project";
const projectData = [
    {
        name: "abc",
        description: "lore ipsum",
    },
    {
        name: "1234",
        description: "ipsum lorem",
    }
]

function ProjectGallery() {
    return <ul>
        {projectData.map((project) => {
            return <Project name={project.name} description={project.description} />
        })}
    </ul>;
  }
  
  export default ProjectGallery;