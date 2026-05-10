import { useState } from "react";
import imageData from "../data/imageData";
import ImageCard from "./ImageCard";

function ImageGallery() {
    const [category, setCategory] = useState("All");

    const categories = ["All", ...new Set(imageData.map(img => img.category))];

    const filtered =
        category === "All"
            ? imageData
            : imageData.filter(img => img.category === category);

    return (
        <div>
            <div className="buttons">
                {categories.map(cat => (
                    <button key={cat} onClick={() => setCategory(cat)}>
                        {cat}
                    </button>
                ))}
            </div>

            <div className="gallery">
                {filtered.map(img => (
                    <ImageCard key={img.id} {...img} />
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;