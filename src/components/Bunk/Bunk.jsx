import { motion } from "framer-motion";

const missions = [
  {
    title: "🎯 Mission Leader",
    text: `There was only one person...

who could convince me

to bunk classes.

You. 😂

One sentence was enough...

"Ayy... come no yaar chill with me."

And I'd immediately say...

"Okay Okay fine I'll come ....Uk really."`,
  },

  {
    title: "🚶‍♂️ No Second Thoughts",
    text: `Attendance?

Assignments?

Internal marks?

Everything could wait.

Because if you said...

"Leave that..."

I'd happily leave everything

and come with you. ❤️`,
  },

  {
    title: "😂 Attendance Shortage",
    text: `Whenever attendance became short...

I'd start preparing reasons.

But honestly...

the real reason

was always the same.

I bunked with you.

And I don't regret

even one of those days.`,
  },

  {
    title: "🎮 Best Decision Ever",
    text: `Those bunks never felt like wasting time.

Instead...

they became

some of the happiest memories

I'll carry forever.`,
  },
];

const Bunk = ({ onContinue }) => {
  return (
    <section
      id="bunk"
      className="min-h-screen py-28 px-6 bg-[#050816]"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center tracking-[8px] uppercase text-pink-300"
      >
        Chapter Five
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-6xl font-bold mt-4"
      >
        Operation Bunk 😂
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-gray-400 italic mt-5 text-xl"
      >
        "A mission we successfully completed... many, many times."
      </motion.p>

      <div className="max-w-5xl mx-auto mt-24 space-y-10">

        {missions.map((mission, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
              rotate: index % 2 === 0 ? -2 : 2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.02,
            }}
            className="bg-white/10 backdrop-blur-xl border border-pink-400/20 rounded-3xl p-10 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-pink-300 mb-8">
              {mission.title}
            </h2>

            <p className="whitespace-pre-line text-xl leading-[44px] text-gray-200">
              {mission.text}
            </p>
          </motion.div>
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-24"
      >
        <p className="text-3xl italic text-pink-300">
          "People say you'll regret bunking classes...
          <br />
          I never regretted bunking with you." ❤️
        </p>

        <button
          onClick={() => {

    onContinue();

    setTimeout(() => {

        document
            .getElementById("games")
            ?.scrollIntoView({
                behavior: "smooth",
            });

    }, 100);

}}
          className="mt-12 px-10 py-5 bg-pink-500 hover:bg-pink-600 rounded-full text-xl transition"
        >
          🎮 Continue to Game Time →
        </button>
      </motion.div>
    </section>
  );
};

export default Bunk;