import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Brand Column */}
        <div className="footer-brand">
          <h1 className="footer-logo">
            chapter<span className="text-green-400">seven</span>
          </h1>
          <p className="footer-description">
            A space where stories rise, authors connect, and readers discover inspiration in every sentence.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="footer-links">
          <div>
            <h4 className="footer-title">Explore</h4>
            <ul className="footer-list">
              <li><Link to="/books" className="footer-link">Books</Link></li>
              <li><Link to="/authors" className="footer-link">Authors</Link></li>
              <li><Link to="/community" className="footer-link">Community</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-list">
              <li><Link to="/login" className="footer-link">Login</Link></li>
              <li><Link to="/signup" className="footer-link">Sign Up</Link></li>
              <li><Link to="/support" className="footer-link">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Column */}
        <div className="footer-social">
          <h4 className="footer-title">Follow Us</h4>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-note">© {currentYear} ChapterSeven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
