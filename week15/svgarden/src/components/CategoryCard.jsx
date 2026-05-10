function CategoryCard({ category, preview, onClick }) {
    return (
        <div className="category-card" onClick={() => onClick(category)}>

            <div className="category-image">
                <img
                    src={preview}
                    alt={category}
                    onError={(e) => {
                        e.target.src = "/fallback.svg";
                    }}
                />
            </div>

            <h2 className="category-title">{category}</h2>
        </div>
    );
}

export default CategoryCard;