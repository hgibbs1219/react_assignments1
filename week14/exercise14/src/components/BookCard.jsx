import { useState } from "react";

function BookCard({ title, author, description, bookCover }) {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="book-card">
            <h2 className="book-title">{title}</h2>
            <p className="book-author">{author}</p>

            <img
                src={bookCover}
                alt={`Cover of ${title}`}
                className="book-image"
            />

            {showDescription && (
                <p className="book-description">{description}</p>
            )}

            <button
                className="book-button"
                onClick={() => setShowDescription(!showDescription)}
            >
                {showDescription ? "Hide Description" : "Book Description"}
            </button>
        </div>
    );
}

export default BookCard;