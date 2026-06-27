import { motion } from "framer-motion";
import { useState } from "react";

const games = [
  {
    emoji: "🐦",
    title: "Flappy Bird",
    memory: `No matter how many times

we played and got bored of that game ...

we'd still say...

"One more game."

That one game

somehow became

twenty more. 😂`,
  },

  {
    emoji: "🏹",
    title: "Archery",
    memory: `Even a simple

archery game

became competitive.

I still don't know

how seriously

we used to play it. 😂`,
  },

  {
    emoji: "🏓",
    title: "Table Tennis",
    memory: `Sweating after every match...

yet somehow...

we'd still ask...

"One last game?"

Spoiler...

it was never

the last game. 😂`,
  },

  {
    emoji: "🪵",
    title: "Carrom Queen",
    memory: `One more hidden talent.

Your carrom skills

were honestly crazy.

Every single time

I watched you play...

I was fascinated.

The confidence.

The precision.

The accuracy.

Meanwhile...

I'd just sit there thinking...

"Seriously...

is there anything

you AREN'T good at?" 😂❤️`,
  },
];

const GameTime = ({ onContinue }) => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="games"
      className="min-h-screen bg-[#050816] py-24 px-8"
    >
      <h3 className="text-center tracking-[8px] uppercase text-pink-300">
        Chapter Six
      </h3>

      <h1 className="text-center text-6xl font-bold mt-4">
        Level Complete 🎮
      </h1>

      <p className="text-center text-gray-400 mt-6 text-xl italic">
        Every game somehow became another memory.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-20">

        {games.map((game, index) => (

          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
            }}
            onClick={() =>
              setSelected(selected === index ? null : index)
            }
            className="
            cursor-pointer
            rounded-3xl
            bg-white/10
            border
            border-pink-300/20
            backdrop-blur-xl
            p-10
            min-h-[320px]
            flex
            flex-col
            justify-center
            items-center
            transition-all
            "
          >
            {selected === index ? (
              <motion.div
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
              >
                <h2 className="text-3xl font-bold text-pink-300 text-center">
                  {game.title}
                </h2>

                <p className="whitespace-pre-line text-center mt-8 text-xl leading-10">
                  {game.memory}
                </p>
              </motion.div>
            ) : (
              <>
                <div className="text-7xl">{game.emoji}</div>

                <h2 className="text-4xl mt-6 font-bold">
                  {game.title}
                </h2>

                <p className="mt-6 text-pink-300">
                  Click to Play ❤️
                </p>
              </>
            )}
          </motion.div>

        ))}

      </div>

      <div className="text-center mt-24">

        <p className="text-3xl italic text-pink-300">
          "The games were fun...
          <br />
          but spending time with you
          was always the real victory."
        </p>

        <button
          onClick={() => {

    onContinue();

    setTimeout(() => {

        document
            .getElementById("achievement")
            ?.scrollIntoView({
                behavior: "smooth",
            });

    }, 100);

}}
          className="mt-14 px-10 py-5 bg-pink-500 rounded-full hover:bg-pink-600 transition"
        >
          🏆 Continue to Achievement Unlocked →
        </button>

      </div>
    </section>
  );
};

export default GameTime;