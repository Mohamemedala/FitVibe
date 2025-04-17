import { motion } from "framer-motion";
import A1 from "../assets/s2.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="relative px-6 sm:px-10 md:mx-24 isolate">
      {/* Background Gradient */}
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="md:py-24 flex flex-col md:flex-row md:justify-center gap-10 md:gap-36 items-center">
          {/* صورة */}
          <motion.div
            className="rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <img src={A1} alt="" width={450} className="rounded-xl w-full max-w-sm md:max-w-none" />
          </motion.div>

          {/* نص */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl text-center  md:text-left font-semibold tracking-tighter mb-4">
              About Us
            </h1>
            <p className="text-sm md:text-lg tracking-tight text-gray-700 max-w-xl leading-6">
              At FitVibe, we’re all about good vibes and better moves. We make
              fitness fun, simple, and part of your everyday life — no pressure,
              just progress. Whether you're starting fresh, getting back into your
              groove, or pushing your limits, we’ve got your back with smart
              tools, fresh workouts, and daily motivation.
              <br />
              <br />
              Our goal? To help you build a lifestyle that feels good and fits you.
              No one-size-fits-all. Just real results, your way.
              <br />
              <br />
              Hit the button to get the full story and see how FitVibe can vibe
              with you.
            </p>

            <div className="py-6">
              <Link
                to="/about"
                className="hidden md:inline-block text-white bg-black hover:bg-gray-700 transition px-4 py-2 rounded-sm text-sm font-semibold"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
