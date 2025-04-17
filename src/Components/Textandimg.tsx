import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

import txt1 from '../assets/txt1.jpg';
import txt2 from '../assets/txt2.jpg';
import txt4 from '../assets/txt4.jpg';
import txt5 from '../assets/txt5.jpg';
import txt6 from '../assets/txt6.jpg';
import txt7 from '../assets/txt7.jpg';
import { Link } from 'react-router-dom';

function Textandimg() {
  const images = [txt1, txt2, txt4, txt5, txt6, txt7];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white py-16 px-6 md:px-32">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">

        {/* النص مع Animation من اليسار */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tighter mb-4">
            You’re One Step Away from a Stronger You
          </h2>
          <p className="text-gray-700 md:text-lg text-sm mb-6 md:max-w-[450px] tracking-tighter">
            Every rep, every step, every drop of sweat gets you closer to your goal. With FitVibe, you're not just working out you're transforming your lifestyle.
          </p>
          <Link to="/contact" className="bg-black tracking-tighter text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition">
            Start Your Journey
          </Link>
        </motion.div>

        {/* الصورة مع Animation من اليمين */}
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src={images[current]}
            alt={`Motivation ${current + 1}`}
            className="rounded-2xl shadow-lg w-full h-96 object-cover"
          />

          {/* الأسهم */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
          >
            <FaChevronRight size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Textandimg;
