import { motion } from "framer-motion";

const photos = [
  {
    image: "https://placehold.co/600x800/1f2937/ffffff?text=Photo+1",
    title: "Beautiful ❤️",
    description: "You somehow manage to look pretty every single day.",
    rotate: "-rotate-3",
  },
  {
    image: "https://placehold.co/600x800/374151/ffffff?text=Photo+2",
    title: "Beauty & Brains 🧠",
    description:
      "School Topper • PU Topper • State Rank 6 • Engineering Topper.",
    rotate: "rotate-2",
  },
  {
    image: "https://placehold.co/600x800/4b5563/ffffff?text=Photo+3",
    title: "My Confidence 💙",
    description:
      "You never realised how much confidence you gave me.",
    rotate: "-rotate-2",
  },
  {
    image: "https://placehold.co/600x800/6b7280/ffffff?text=Photo+4",
    title: "Chicken Lover 🍗",
    description:
      "I'm convinced chicken is your true soulmate 😂",
    rotate: "rotate-3",
  },
  {
    image: "https://placehold.co/600x800/1f2937/ffffff?text=Photo+5",
    title: "Pure Soul ✨",
    description:
      "One of the most honest and genuine people I've ever met.",
    rotate: "-rotate-1",
  },
  {
    image: "https://placehold.co/600x800/374151/ffffff?text=Photo+6",
    title: "Family Girl 👨‍👩‍👧",
    description:
      "The way you speak about your parents always makes me smile.",
    rotate: "rotate-1",
  },
  {
    image: "https://placehold.co/600x800/4b5563/ffffff?text=Photo+7",
    title: "Multitalented 🌸",
    description:
      "Debates • Dance • Singing • Presentations • Everything!",
    rotate: "-rotate-3",
  },
  {
    image: "https://placehold.co/600x800/6b7280/ffffff?text=Photo+8",
    title: "My Chukki 💖",
    description:
      "Still the cutest nickname I'll ever use.",
    rotate: "rotate-2",
  },
  {
    image: "https://placehold.co/600x800/1f2937/ffffff?text=Photo+9",
    title: "First & Forever ❤️",
    description:
      "The first... and the last best friend.",
    rotate: "-rotate-2",
  },
];

const Gallery = ({ onContinue }) => {
  return (
    <section
      id="gallery"
      className="min-h-screen px-8 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-6xl font-bold"
      >
        Meet Chukki 🌸
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-gray-400 mt-5 mb-16 text-lg"
      >
        Every picture has a little story hidden in it ❤️
      </motion.p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {photos.map((photo, index) => (

          <motion.div
            key={index}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -8,
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className={`
              ${photo.rotate}
              group
              bg-white
              rounded-xl
              p-3
              shadow-2xl
              cursor-pointer
              relative
            `}
          >
            <div className="relative overflow-hidden rounded-lg">

              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div
                className="
                absolute
                inset-0
                bg-black/70
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                flex
                flex-col
                justify-end
                p-6"
              >
                <h3 className="text-3xl font-bold text-pink-300">
                  {photo.title}
                </h3>

                <p className="text-white mt-4 leading-8 text-lg">
                  {photo.description}
                </p>
              </div>

            </div>

            <p className="text-center mt-4 text-gray-700 font-semibold text-lg">
              Memory {index + 1}
            </p>

          </motion.div>

        ))}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <p className="text-3xl italic text-pink-300">
          "Some people are beautiful in photographs...
          <br />
          You made the memories beautiful too."
        </p>

       <button
    onClick={() => {

        onContinue();

        setTimeout(() => {

            document
                .getElementById("library")
                ?.scrollIntoView({
                    behavior: "smooth",
                });

        }, 100);

    }}
    className="mt-12 px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 transition-all duration-300"
>
         Continue to Library Chronicles →
</button>
      </motion.div>
    </section>
  );
};

export default Gallery;