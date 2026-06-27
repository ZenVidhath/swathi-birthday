import { motion } from "framer-motion";
//import library from "../../assets/library/library.jpg";

const memories = [
  {
    title: "📚 CIE Days",
    text: `Whenever CIEs came around...

I would panic.

You would stay calm.

And somehow...

you always had enough patience to teach this Pedha Vidhath.

Thank you for never giving up on me. ❤️😂`,
  },
  {
    title: "📝 My Endless Doubts",
    text: `Sometimes I used to ask the dumbest questions.

Yet...

you never laughed.

You explained everything until I finally understood.

That patience is something I'll always admire.`,
  },
  {
    title: "🎓 The Topper",
    text: `School Topper.

PU Topper.

6th Rank in Karnataka.

Engineering Topper.

Seriously Chukki...

When did you even study? 😂`,
  },
  {
    title: "🏆 My Marks",
    text: `Whenever I scored well...

I always felt...

a part of those marks belonged to you.

Because without your help...

they would've looked very different. 😂❤️`,
  },
  {
    title: "💙 Thank You",
    text: `You probably don't even realise this...

But those library sessions

weren't just about studying.

They became some of my happiest memories of college.`,
  },
];

const Library = ({ onContinue }) => {
  return (
    <section
      id="library"
      className="relative min-h-screen overflow-hidden py-28"
    >
      {/* Background */}
{/* 
      <motion.img
        src={library}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 10 }}
        className="absolute inset-0 w-full h-full object-cover opacity-15 blur-sm"
      /> */}

      <div className="absolute inset-0 bg-[#050816]/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center tracking-[8px] uppercase text-pink-300"
        >
          Chapter Three
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-6xl font-bold mt-4"
        >
          The Library Chronicles 📚
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="text-center italic text-gray-300 mt-6 text-xl"
        >
          "Where one topper somehow managed to pass one Pedha Vidhath." 😂
        </motion.p>

        {/* Notebook */}

        <div className="mt-24 space-y-20">

          {memories.map((memory, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                rotate: index % 2 === 0 ? -3 : 3,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                rotate: 0,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{
                scale: 1.02,
                rotate: 0.5,
              }}
              className="
              relative
              bg-[#fdf8ec]
              rounded-xl
              shadow-2xl
              px-12
              py-10
              text-gray-800
              overflow-hidden
              "
            >
              {/* Notebook Lines */}

              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #bcd8ff 34px)",
                }}
              />

              {/* Red Margin */}

              <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-red-300" />

              <div className="relative z-10">

                <h2 className="text-4xl font-bold mb-8">
                  {memory.title}
                </h2>

                <p className="whitespace-pre-line text-2xl leading-[52px] font-medium">
                  {memory.text}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-28 text-center"
        >
          <p className="text-4xl italic text-pink-300">
            "Some of my favourite college memories...
            <br />
            were simply sitting beside you in this library."
          </p>

         <button
  onClick={() => {
    onContinue();

    setTimeout(() => {
      document
        .getElementById("bus")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }}
  className="mt-14 px-10 py-5 bg-pink-500 rounded-full"
>
  🚌 Continue to Bus Diaries →
</button>

        </motion.div>

      </div>
    </section>
  );
};

export default Library;