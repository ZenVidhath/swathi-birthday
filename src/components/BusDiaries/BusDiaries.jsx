import { motion } from "framer-motion";

const memories = [
  {
    title: "🌅 Waiting Every Morning",
    text: `Every single morning...

I'd wait for you.

Even if it meant getting late.

Because somehow...

going to college without you

never felt complete.`,
  },

  {
    title: "💺 Reserved... Sorry 😂",
    text: `The bus would be completely packed.

Somehow...

you'd always manage to find two seats.

You'd sit in one...

and quietly save the other one for me.

Then...

before I could even reach...

someone else would come to sit there.

You'd give that tiny awkward smile...

look at them...

and say...

"Sorry... he's sitting here."

They'd walk away with the grumpiest face ever. 😂

A few seconds later...

I'd come and sit beside you.

The moment our eyes met...

we'd both start laughing.`,
  },

  {
    title: "✨ Pretty As Always",
    text: `Every morning...

before anything else...

I'd look at you and say...

"You look pretty today."

Honestly...

I don't think there was a single day

when it wasn't true.`,
  },

  {
    title: "🤣 Gossip Unlimited",
    text: `Those bus rides...

were basically our daily gossip sessions.

Poor lecturers.

Poor classmates.

Poor seniors.

Nobody escaped.

Srini...

Purshu...

Everyone somehow had a nickname.

Looking back now...

I sometimes wonder...

did we leave anyone without gossiping? 😂`,
  },

  {
    title: "💙 The Journey",
    text: `Funny isn't it...

Years later...

I don't remember every lecture.

I don't remember every assignment.

But I remember almost every bus ride.

Because those rides

were never about travelling.

They were about spending time with you.`,
  },
];

const BusDiaries = ({ onContinue }) => {
  return (
    <section
      id="bus"
      className="min-h-screen py-28 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#09111f] to-[#050816]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center tracking-[8px] uppercase text-pink-300"
        >
          Chapter Four
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-6xl font-bold mt-4"
        >
          The Journey Between Home & College ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-400 italic text-xl mt-6"
        >
          "Some of my favourite conversations happened before college even began."
        </motion.p>

        <div className="mt-24 space-y-12">

          {memories.map((memory, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -120 : 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className="
                  max-w-2xl
                  backdrop-blur-xl
                  bg-white/10
                  border
                  border-pink-300/20
                  rounded-3xl
                  p-10
                  shadow-[0_0_40px_rgba(255,105,180,.12)]
                "
              >
                <h2 className="text-3xl font-bold text-pink-300 mb-8">
                  {memory.title}
                </h2>

                <p className="whitespace-pre-line text-xl leading-[44px] text-gray-200">
                  {memory.text}
                </p>
              </div>
            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-28"
        >
          <p className="text-3xl italic text-pink-300 leading-relaxed">
            "Years later...
            <br />
            I don't miss the destination.
            <br />
            I miss the journey...
            <br />
            because you were there."
          </p>

      <button
  onClick={() => {
    onContinue();

    setTimeout(() => {
      document
        .getElementById("bunk")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }}
  className="mt-14 px-10 py-5 bg-pink-500 rounded-full"
>
  😂 Continue to Operation Bunk →
</button>
        </motion.div>

      </div>
    </section>
  );
};

export default BusDiaries;