import BookCard from './BookCard';

const topBooks = [
  {
    title: 'The Silent Thread',
    author: 'Mara Lin',
    genre: 'Mystery',
    cover: '/covers/cover1.jpg',
    views: '8,126',
    likes: '2,574',
    rating: '4.8',
  },
  {
    title: 'Ink & Ashes',
    author: 'Kairo Voss',
    genre: 'Fantasy',
    cover: '/covers/cover2.jpg',
    views: '5,324',
    likes: '1,926',
    rating: '4.6',
  },
  {
    title: 'Beneath the Paper Sky',
    author: 'Leah Crane',
    genre: 'Sci-Fi',
    cover: '/covers/cover3.jpg',
    views: '6,732',
    likes: '2,187',
    rating: '4.7',
  },
];

export default function BookSection() {
  return (
    <section className="book-section">
      <div className="book-container">
        <p className="book-heading">Featured Stories</p>
        <p className="book-subheading">Explore the stories readers can't stop talking about.</p>

        <div className="book-grid">
          {topBooks.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
