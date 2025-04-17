import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDumbbell, FaRunning, FaLeaf, FaBolt, FaShieldAlt, FaSwimmer } from "react-icons/fa";
import { MdAccessTime, MdStarRate } from "react-icons/md";
import Footer from "../../Footer";
import P1 from '../../../assets/p1.jpg';
import P2 from '../../../assets/p2.jpg';
import P3 from '../../../assets/p3.jpg';
import P4 from '../../../assets/p4.jpg';
import P5 from '../../../assets/p5.jpg';
import P6 from '../../../assets/p6.jpg';

const programs = [
  {
    title: "Strength Training",
    description: "Build muscle and increase your strength with our progressive lifting routines.",
    image: P3,
    level: "Advanced",
    duration: "8 weeks",
    icon: <FaDumbbell className="text-xl text-red-600" />,
  },
  {
    title: "Cardio Blast",
    description: "Improve endurance and burn fat with high-energy cardio sessions.",
    image: P2,
    level: "Beginner",
    duration: "4 weeks",
    icon: <FaRunning className="text-xl text-blue-500" />,
  },
  {
    title: "Yoga Flow",
    description: "Enhance flexibility and reduce stress with guided yoga practices.",
    image: P1,
    level: "All Levels",
    duration: "Ongoing",
    icon: <FaLeaf className="text-xl text-green-500" />,
  },
  {
    title: "HIIT Burn",
    description: "Torch calories fast with high-intensity interval training workouts.",
    image: P6,
    level: "Intermediate",
    duration: "6 weeks",
    icon: <FaBolt className="text-xl text-yellow-500" />,
  },
  {
    title: "Bootcamp Warrior",
    description: "Challenge yourself with this intense full-body conditioning program.",
    image: P5,
    level: "Advanced",
    duration: "12 weeks",
    icon: <FaShieldAlt className="text-xl text-purple-600" />,
  },
  {
    title: "Aqua Fit",
    description: "Low-impact pool workouts ideal for recovery and joint health.",
    image: P4,
    level: "Beginner",
    duration: "5 weeks",
    icon: <FaSwimmer className="text-xl text-cyan-500" />,
  },
];

const ProgramsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow px-6 py-10 sm:px-10 md:px-20 lg:px-32 space-y-12 text-black">
        <motion.div
          className="text-sm text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black font-semibold">Programs</span>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter">Explore Our Fitness Programs</h1>
          <p className="text-gray-600 max-w-sm text-lg mx-auto mt-3 tracking-tight">
            Whether you're a beginner or a pro, we’ve got a program for your fitness journey.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={program.image} alt={program.title} className="h-48 w-full object-cover" />
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-white p-2 rounded-full shadow-inner">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black">{program.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{program.description}</p>
                <div className="text-sm text-black flex items-center gap-2">
                  <MdStarRate /> {program.level} · <MdAccessTime /> {program.duration}
                </div>
                <button className="w-full mt-3 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition">
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-2xl p-10 text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black">Why Join Our Programs?</h2>
          <ul className="list-disc text-gray-700 max-w-2xl mx-auto text-left pl-5 space-y-1">
            <li>Certified and experienced coaches</li>
            <li>Nutrition guidance included</li>
            <li>Flexible schedules and support</li>
            <li>Proven results from past members</li>
          </ul>
        </motion.div>

        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-black">Ready to start your fitness journey?</h2>
          <Link
            to="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition font-semibold"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
