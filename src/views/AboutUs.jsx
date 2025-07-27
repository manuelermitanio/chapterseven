import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <div className='bg-gray-950 h-screen'>
          <Navbar />

          <main className="bg-gray-950 pt-24 pb-16 px-6 text-gray-200 h-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
                About Us
              </h1>
              
              <p className="text-gray-300">
                 <span className='text-xl'><strong>chapter<span className="text-green-400">seven</span></strong></span> is more than a platform—it's a creative haven for authors, dreamers, and narrative architects. Our mission is to empower storytellers to shape, organize, and share their chapters with clarity, control, and personal expression.
              </p>

              <p className="text-gray-300">
                We believe every voice matters. Whether you're just beginning your writing journey or you're already published, our tools and community are built to help you flourish. No distractions—just pure story crafting.
              </p>

              <p className="text-gray-300">
                Authors can draft and edit chapters seamlessly, publish without the clutter, and connect with other creatives. From feedback loops to visibility features like reader rankings and featured spots, your work finds its spotlight.
              </p>

              <p className="text-gray-300">
                For readers, ChapterSeven offers a genre-rich discovery experience—from fantasy, sci-fi, and romance to drama, nonfiction, and more. Follow your favorite authors, rate chapters, and dive into the vibrant rhythm of our storytelling community.
              </p>

              <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
                Ready to write your next chapter? You're home now.
              </div>
            </motion.div>
          </main>
        </div>
      )}
    </>
  );
}
