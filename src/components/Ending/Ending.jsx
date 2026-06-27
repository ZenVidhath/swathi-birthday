import { motion } from "framer-motion";

// Replace this with your own photo later
const myPhoto =
  "https://placehold.co/300x300/1f2937/ffffff?text=Pedha+Vidhath+😂";

const Ending = () => {
  return (
    <section
      id="ending"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold text-center"
      >
        Until Our Next Adventure...
      </motion.h1>

      <motion.img
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        src={myPhoto}
        alt="Me"
        className="w-64 h-64 rounded-full object-cover border-8 border-pink-400 mt-14 shadow-[0_0_60px_rgba(255,105,180,.5)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-5xl mt-20 bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-pink-300/20"
      >
        <div className="whitespace-pre-line text-xl leading-[46px] text-gray-200">

{` One last thing. 

I know this website has been full of jokes, memories and me pulling your leg.

But before it ends...

there's something I genuinely wanted to tell you.

First of all...

I'm really sorry for joking the other day about leaving my job because I felt Mangalore would be a better place to stay.

I know it wasn't the right time to joke like that, especially when you're already carrying so much on your mind.

I'm really sorry.

And about your joining date...

I know how much it hurts.

I know how badly you've been waiting for it.

I also know you've been trying to stay strong even when it's really difficult.

But please don't lose hope.

You're one of the most hardworking people I've ever met.

School topper.

PU topper.

State Rank 6.

Engineering topper.

A delayed joining date can never take any of that away from you.

Whether it's tomorrow...

next month...

or later...

I genuinely believe you'll do amazing wherever life takes you.

And until then...

I just want you to remember one thing.

You've always had my support.

And you'll continue to have it.

Always.

You once told me...

"You deserve my cold behaviour and nothing else."

Nooo yaar. 😭

I don't want the cold behaviour.

I want my sweet natured Swathi back.

And yes...

I miss seeing your WhatsApp DP too. 🥲

I hope one day or maybe today itself(Pleaseeeeeee)...

I'll suddenly open WhatsApp...

and see that DP back again.

Not because of the DP itself...

But because I'll know...

"My Chukki is smiling again."

That's all I want.

So...

on your birthday...

don't overthink today.

Smile more.

And remember...

no matter how busy life gets...

or where we end up...

you'll always be...

my first...

and forever...

best friend.

❤️ Happy Birthday Swathiiiiii.

— Your Pidhu`}
        </div>
      </motion.div>
    </section>
  );
};

export default Ending;