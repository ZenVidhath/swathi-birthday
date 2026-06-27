import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 1200);

          return 100;
        }

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#050816] flex flex-col justify-center items-center z-50"
        exit={{ opacity: 0 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-10"
        >
          Loading Memories...
        </motion.h1>

        <div className="w-[320px] h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-pink-400"
            animate={{ width: `${progress}%` }}
          />
        </div>

        <motion.p
          className="mt-8 text-xl text-pink-300"
          animate={{ opacity: progress === 100 ? 1 : 0 }}
        >
          Ready ❤️
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;