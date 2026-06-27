import { motion } from "framer-motion";

const FinalLetter = ({ onContinue }) => {
  return (
    <section
      id="letter"
      className="min-h-screen py-28 px-6 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
        max-w-5xl
        bg-[#fffdf7]
        rounded-3xl
        shadow-2xl
        p-14
        text-gray-800
        relative
        "
      >
        {/* Title */}

        <h1 className="text-5xl text-center mb-14">
          💌 Happy Birthday, SNP!!!
        </h1>

        {/* Letter */}

        <div className="text-2xl leading-[52px] whitespace-pre-line">

{`Dear Swathi,

I honestly don't even know where to begin.

I started making this website thinking it would just be a small birthday surprise.

But somewhere in the middle...

I realised...

I wasn't making a website.

I was reliving four years of memories.

Every chapter reminded me how lucky I was to meet someone like you.

From the library...

to the bus rides...

to bunking classes...

to playing games...

every memory somehow became one of my favourites simply because you were there.

You know...

people often say college gives you memories.

For me...

college gave me my best friend.

The first one.

And the last one.

Thank you for teaching this Pedha Vidhath.

Thank you for making me laugh.

Thank you for believing in me.

Thank you for making me more confident.

Thank you for always being there.

And thank you...

for being you.

I also want to tell you one more thing.

I know you've been worrying a lot about your joining date.

Please don't let it make you doubt yourself.

A delayed joining date doesn't change who you are.

You're still the same hardworking, intelligent and kind person who became a school topper, a PU topper, a state rank holder and an engineering topper.

One delayed date can never take that away from you.

I'm sure everything will work out.

And even if life takes a different route...

I know you'll shine there too.

So for today...

don't think about joining dates.

Don't think about work.

Just smile.

Because today belongs to you.

Happy Birthday, Chukki.

Thank you for being my first...

and forever...

best friend.

— Pidhath ❤️`}
        </div>

        <div className="text-center mt-16">

          <button
  onClick={() => {

    onContinue();

    setTimeout(() => {

      document
        .getElementById("ending")
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }, 100);

  }}
  className="px-10 py-5 bg-pink-500 rounded-full hover:bg-pink-600 text-white"
>
  🎂 One Last Surprise →
</button>
        </div>

      </motion.div>

    </section>
  );
};

export default FinalLetter;