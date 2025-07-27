import { FaComments, FaBookOpen, FaFeatherAlt  } from 'react-icons/fa';

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <p className="feature-heading">
            Our Key features
        </p>
        <p className="feature-subheading">
          Whether you're here to read, write, or discover, ChapterSeven is built for storytelling lovers.
        </p>

        <div className="feature-grid">
          <div className="feature-card flex flex-col items-center text-center">
            <div className="feature-icon mb-3">
             <FaBookOpen/>
            </div>
            <h3 className="feature-title text-xl font-semibold mb-2">Story Hub</h3>
            <p className="feature-text text-sm text-gray-300">
              A collection handpicked to inspire, challenge, and move you with genres for every mood.
            </p>
          </div>


          <div className="feature-card flex flex-col items-center text-center">
             <div className="feature-icon mb-3">
             <FaFeatherAlt/>
            </div>
            <h3 className="feature-title">Writer's Lounge</h3>
            <p className="feature-text">
              Tools and spaces for writers to draft, publish, and connect with fellow authors.
            </p>
          </div>

          <div className="feature-card flex flex-col items-center text-center">
           <div className="feature-icon mb-3">
            <FaComments/>
            </div>
             <h3 className="feature-title">Active Community</h3>
            <p className="feature-text">
              Engage with readers. Share insights. Spark conversations around your favorite works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
