function BookCard({ title, author, content, bookCover }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <img src={bookCover} alt={title} />
            <p>{content}</p>

        </div>
    );
}
export default BookCard;