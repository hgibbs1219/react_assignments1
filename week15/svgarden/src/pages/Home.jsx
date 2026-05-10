import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageCard from "../components/ImageCard.jsx";
import imageData from "../data/imageData.js";
import CategoryCard from "../components/CategoryCard.jsx";

function Home() {
    const location = useLocation();

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        setSelectedCategory(null);
    }, [location]);

    // Get unique categories
    const categories = [
        ...new Set(
            ImageData
                .filter((img) => img?.category)
                .map((img) => img.category.trim())
        ),
    ];

    // Filter images by selected category
    const filteredImages = ImageData.filter(
        (img) =>
            img?.category &&
            img.category.trim() === selectedCategory
    );

    // Get preview image for category card
    const getPreview = (category) => {
        const images = ImageData.filter(
            (img) =>
                img?.category &&
                img.category.trim() === category
        );

        return Images.length
            ? images[0].url
            : "/fallback.svg";
    };

    return (
        <div className="page-grid">

            {/* CATEGORY VIEW */}
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

            {/* GALLERY VIEW */}
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
