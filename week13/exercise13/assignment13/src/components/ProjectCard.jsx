import { useState } from "react";
function ProjectCard({ name, description, url, image }) {
    const [showDescription, setShowDescription] = useState(false);
    function toggleDescription() {
        setShowDescription(!showDescription);
    }
    return (
        <div className="project-card">
            <img src={image} alt={name} className="project-image" />
            <h2 className="project-name">{name}</h2>
            <button onClick={toggleDescription} className="project-button">
                {showDescription ? " Hide Description" : " Show Description"}
            </button>
            {showDescription && <p className="project-description">{description}</p>}
            <br />
            <a href={url} className="button">
                Visit Project
            </a>
        </div>
    );
}
export default ProjectCard;