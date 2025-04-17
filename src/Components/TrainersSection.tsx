import { motion } from "framer-motion";
import Coache1 from "../assets/Coache1.jpg";
import Coache2 from "../assets/Coache2.jpg";
import Coache3 from "../assets/Coache3.jpg";
import Coache4 from "../assets/Coache4.jpg";

const trainers = [
  {
    name: "Jessica Lane",
    role: "Strength & Conditioning Coach",
    quote: "Push past your limits and become stronger every day.",
    image: Coache3,
  },
  {
    name: "Mark Rivera",
    role: "HIIT & Cardio Specialist",
    quote: "Train smart, move fast, and love the burn!",
    image: Coache1,
  },
  {
    name: "Emily Stone",
    role: "Certified Nutritionist",
    quote: "Fuel your body, fuel your life.",
    image: Coache4,
  },
  {
    name: "Daniel Brooks",
    role: "Mobility & Recovery Expert",
    quote: "Fitness isn’t just strength—it’s how well you move.",
    image: Coache2,
  },
];

export default function TrainersSection() {
  return (
    <section className="py-24 md:mx-24 px-4">
      <h2 className="md:text-5xl tracking-tighter text-3xl font-semibold text-center mb-2"> Meet Our Coaches</h2>
      <p className="text-center text-gray-800 tracking-tighter md:text-lg text-sm mb-10 max-w-xl mx-auto">
        Learn from professionals who live and breathe fitness, health, and transformation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {trainers.map((trainer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.2, type: "spring" }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{trainer.name}</h3>
            <p className="text-sm text-gray-700">{trainer.role}</p>
            <p className="text-xs text-gray-600 italic mt-3">“{trainer.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
