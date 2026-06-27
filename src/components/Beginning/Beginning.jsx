import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaUserGraduate,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const story = [
  {
    icon: <FaBookOpen />,
    text: "It all started in the first year of engineering.",
  },
  {
    icon: <FaUserGraduate />,
    text: "Back then, I was a boy who could barely talk to girls.",
  },
  {
    icon: <FaStar />,
    text: "Then one day... I saw someone.",
  },
  {
    icon: <FaHeart />,
    text: '"How can one person have both beauty and brains at the same time?"',
    highlight: true,
  },
  {
    icon: "🎓",
    text: "School Topper • PU Topper • Engineering Topper",
  },
  {
    icon: "✨",
    text: "And on top of all that... she was beautiful too.",
  },
  {
    icon: "😂",
    text: "At that point I was convinced... God definitely had favourites. 😂✨",
  },
  {
    icon: "💖",
    text: "That's when I met SNP... Chukki...",
  },
  {
    icon: "😂",
    text: "Okay okay sorry Swathiii ❤️",
    pink: true,
  },
  {
    icon: "🌸",
    text: "Little did I know that Chukki would become my first and forever best friend.",
    highlight: true,
  },
];

const Beginning = ({onContinue}) => {
  return (
    <section
      id="beginning"
      className="min-h-screen px-6 py-24 flex justify-center"
    >
      <div className="max-w-5xl w-full">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-pink-300 tracking-[6px] uppercase text-center"
        >
          Chapter One
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl text-center mt-3 mb-16 font-bold"
        >
          The Beginning
        </motion.h1>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-pink-400/30" />

          {story.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex gap-8 mb-14 relative"
            >
              {/* Circle */}

              <div className="w-14 h-14 rounded-full bg-pink-500 flex justify-center items-center text-xl shadow-lg shadow-pink-500/40 z-10">
                {item.icon}
              </div>

              {/* Card */}

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex-1">

                <p
                  className={`leading-9 ${
                    item.highlight
                      ? "text-3xl text-pink-300 font-semibold"
                      : item.pink
                      ? "text-2xl text-pink-400 font-bold"
                      : "text-xl text-gray-200"
                  }`}
                >
                  {item.text}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <p className="text-3xl font-light italic">
            "...and that's where our story began."
          </p>

          <button
  onClick={() => {

    onContinue();

    setTimeout(() => {
      document
        .getElementById("gallery")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);

  }}
  className="mt-10 px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 transition"
>
  Continue →
</button>
        </motion.div>

      </div>
    </section>
  );
};

export default Beginning;