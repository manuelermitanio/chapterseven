import { FaEye, FaHeart, FaStar } from "react-icons/fa";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} className="book-cover" />

      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>

        <div className="book-genre">{book.genre}</div>

        <div className="book-stats flex gap-4 mt-2 text-sm text-[var(--color-tech)] items-center">
          <span className="flex items-center gap-1">
            <FaEye /> {book.views}
          </span>
          <span className="flex items-center gap-1">
            <FaHeart /> {book.likes}
          </span>
          <span className="flex items-center gap-1">
            <FaStar /> {book.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
