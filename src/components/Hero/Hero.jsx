import { useState } from "react";

import StarBackground from "../Background/StarBackground";
import Moon from "../Background/Moon";
import Fireflies from "../Background/Fireflies";
import Intro from "../Intro/Intro";

import { motion } from "framer-motion";

const Hero = ({ onStartStory }) => {

  const [showHero, setShowHero] = useState(false);

  return (

    <>
      <StarBackground />
      <Moon />
      <Fireflies />

      {!showHero ? (

        <Intro onFinish={() => setShowHero(true)} />

      ) : (

        <section className="min-h-screen flex justify-center items-center">

          <div className="text-center">

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-pink-300 text-2xl"
            >
              Happy Birthday
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, scale: .8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: .5 }}
              className="text-7xl font-bold mt-5"
            >
              Swathi ❤️
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-3xl"
            >
              To My First and Forever Best Friend
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-6 text-gray-300 text-xl"
            >
              For the one person I'll always call my best friend.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px #ff69b4"
              }}
              onClick={() => {
                onStartStory();

                setTimeout(() => {
                    document
                    .getElementById("beginning")
                    ?.scrollIntoView({
                        behavior: "smooth",
                    });
                }, 100);
                }}
              className="mt-14 px-8 py-4 bg-pink-500 rounded-full"
            >
              Read Our Story →
            </motion.button>

          </div>

        </section>

      )}

    </>

  );

};

export default Hero;