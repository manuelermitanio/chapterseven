import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import AnalyticsSection from '../components/Analytics';
import BookSection from '../components/BookSection';
import Footer from '../components/Footer';

export default function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate a delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <div>
          <Navbar />
          <main>
            <HeroSection />
            <FeatureSection />
            <AnalyticsSection />
            <BookSection />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}
