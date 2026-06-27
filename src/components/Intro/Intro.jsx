import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  "Some people become a memory.",
  "Some become a chapter.",
  "But once in a lifetime...",
  "someone becomes your best friend.",
  "❤️",
  "This story is about that person."
];

const Intro = ({ onFinish }) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    if (index >= quotes.length) {

      setTimeout(() => {
        onFinish();
      }, 1200);

      return;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2200);

    return () => clearTimeout(timer);

  }, [index]);

  return (

    <div className="absolute inset-0 flex justify-center items-center">

      <AnimatePresence mode="wait">

        {index < quotes.length && (

          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 1 }}
            className="text-center text-3xl md:text-5xl font-semibold text-white px-8"
          >
            {quotes[index]}
          </motion.h1>

        )}

      </AnimatePresence>

    </div>

  );

};

export default Intro;