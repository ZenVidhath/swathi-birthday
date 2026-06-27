import { motion } from "framer-motion";

const achievements = [
  "🎓 Met The Smartest Girl In Class",
  "📚 Survived CIEs (Thanks to Chukki 😂)",
  "🚌 Daily Bus Partner",
  "😂 Professional Class Bunker",
  "🎮 Countless Games Played",
  "❤️ Countless Memories Made",
];

const Achievement = ({ onContinue }) => {
  return (
    <section
      id="achievement"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="tracking-[8px] uppercase text-pink-300"
      >
        Final Chapter
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold mt-4"
      >
        🏆 Achievement Unlocked
      </motion.h1>

      <div className="max-w-3xl w-full mt-20 space-y-6">

        {achievements.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * .15 }}
            className="bg-white/10 border border-pink-300/20 rounded-2xl p-6 text-2xl backdrop-blur-xl"
          >
            ✅ {item}
          </motion.div>

        ))}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 text-center"
      >
        <h2 className="text-5xl font-bold text-pink-300">
          🌟 Legendary Achievement
        </h2>

        <p className="text-3xl italic mt-8">
          Found a best friend...
          <br />
          and never lost her.
        </p>

        <button
          onClick={() => {

            onContinue();

            setTimeout(() => {

              document
                .getElementById("letter")
                ?.scrollIntoView({
                  behavior: "smooth",
                });

            }, 100);

          }}
          className="mt-14 px-10 py-5 rounded-full bg-pink-500 hover:bg-pink-600 transition"
        >
          💌 Read Birthday Letter →
        </button>

      </motion.div>

    </section>
  );
};

export default Achievement;