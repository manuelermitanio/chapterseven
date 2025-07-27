import { useState, useEffect } from 'react';
import { Link } from 'react-router'; // Fix: use react-router-dom

const heroImages = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url('${heroImages[current]}')` }}
    >
      <div className="carousel-overlay" />

      <div className="hero-content">
        <p className="hero-tagline">READ. WRITE. INSPIRE.</p>

        <h1 className="hero-title">
          Every Story Starts <br className="hidden md:block" /> with an Idea
        </h1>

        <p className="hero-subtext">
          Discover stories, ideas, and authors that turn pages into power. <br />
          ChapterSeven is your portal to storytelling brilliance — one line at a time.
        </p>

        <div className="hero-buttons">
          <Link to="/books" className="btn-primary">Browse Library</Link>
          <Link to="/login" className="btn-outline">Start Your Journey</Link>
        </div>
      </div>
    </section>
  );
}
