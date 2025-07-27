import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-white mb-6 text-sm tracking-wide animate-pulse">Page loading...</p>

      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-green-500 rounded-sm"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
