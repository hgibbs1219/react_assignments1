import './css/app.css'
import BookCard from "./components/BookCard.jsx";
import Footer from "./components/Footer.jsx";
import { books } from "./data/bookData.jsx";
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      {books.map((book) => (
        <BookCard key={book.id} title={book.title} author={book.author} content={book.content} bookCover={book.bookCover} />
      ))}
      <Footer />
    </div>
  );
}
export default App;
