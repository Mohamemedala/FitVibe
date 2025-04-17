import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Bgc from '../assets/bgc.jpg'
import { Link } from "react-router-dom";

export default function CommunityCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="relative bg-gray-900 text-white py-20 px-6 overflow-hidden  md:mx-24 rounded-xl md:my-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-1 bg-cover bg-center opacity-20">

          <img src={Bgc} alt="" />
        </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter  mb-4">
          Join{" "}
          <span className="text-green-600">
            {inView && <CountUp end={10000} duration={3} separator="," />}
            +
          </span>{" "}
          others achieving their goals
        </h2>
        <p className="text-gray-300 mb-6 text-sm md:text-base">
          Be part of a growing fitness community that supports and motivates each other every step of the way.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
         <Link to="/contact">Join the FitVibe Community</Link>  
        </motion.button>
      </div>
    </motion.section>
  );
}
