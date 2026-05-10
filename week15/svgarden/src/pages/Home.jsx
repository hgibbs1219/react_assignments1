import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageCard from "../components/ImageCard.jsx";
import ImageData from "./data/ImageData.jsx";
import CategoryCard from "../components/CategoryCard.jsx";

function Home() {
    const location = useLocation();

    useEffect(() => {
        setSelectedCategory(null);
    }, [location]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        ...new Set(
            imageData
                .filter((img) => img && img.category)
                .map((img) => img.category.trim())
        ),
    ];

    const filteredImages = imageData.filter(
        (img) =>
            img &&
            img.category &&
            img.category.trim() === selectedCategory
    );

    const getPreview = (category) => {
        const images = imageData.filter(
            (img) =>
                img &&
                img.category &&
                img.category.trim() === category
        );

        return images.length ? images[0].url : "/fallback.svg";
    };

    return (
        <div className="page-grid">

            {/* 🧭 CATEGORY VIEW */}
            {!selectedCategory && (
                <div className="category-grid">
                    {categories.map((cat) => (
                        <CategoryCard
                            key={cat}
                            category={cat}
                            preview={getPreview(cat)}
                            onClick={setSelectedCategory}
                        />
                    ))}
                </div>
            )}

            {selectedCategory && (
                <div>
                    <button
                        className="back-button"
                        onClick={() => setSelectedCategory(null)}
                    >
                        ← Back to Categories
                    </button>

                    <h2>{selectedCategory}</h2>

                    <div className="gallery">
                        {filteredImages.map((img) => (
                            <ImageCard
                                key={img.id}
                                name={img.name}
                                url={img.url}
                                category={img.category}
                            />
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}

export default Home;
