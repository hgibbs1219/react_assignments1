import { books } from "../data/BookData";
import BookCard from "../components/BookCard.jsx";

function Home() {
    return (
        <div className="page-grid">
            <div className="book-grid">

                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        bookCover={book.bookCover}
                    />
                ))}
            </div>

        </div >

    );
}
export default Home;