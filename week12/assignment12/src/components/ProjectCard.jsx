function ProjectCard({ name, description, url, image}) {
    return (
        <div className="project-card">
            <div className="image">
                <img src={image} alt={name} width={300} />
            </div>
            <div className="content">
                <h2>{name}</h2>
                <p>{description}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                >
                    View Project
                </a>
            </div>
        </div>
    );
}
export default ProjectCard;
