import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
          url={project.url}
        />
      ))}
    </div>
  );
}
export default ProjectList;