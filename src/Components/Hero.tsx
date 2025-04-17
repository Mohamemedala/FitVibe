import { motion } from 'framer-motion';

import Bg1 from '../assets/bg1.jpg';
import Bg2 from '../assets/bg2.jpg';
import Bg3 from '../assets/bg3.jpg';
import Bg4 from '../assets/bg4.jpg';
import Bg5 from '../assets/bg5.jpg';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <section className="relative md:px-24 isolate">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>

      <div className="flex flex-col md:flex-row items-center z-10 text-center md:text-left text-black md:gap-24">
        {/* النص والأزرار مع أنيميشن */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h1 className="md:text-7xl text-4xl leading-10 md:pt-0 pt-5 md:px-0 px-1 font-semibold  md:max-w-[900px] md:leading-18 tracking-tighter">
            Transform Your Body, Transform Your Life <br />
          </h1>
          <p className="md:text-lg md:max-w-[500px] md:px-0 px-3 md:leading-6 text-sm tracking-tighter font-medium text-gray-700 md:py-3 py-2 mx-auto md:mx-0">
            FitVibe isn't just about fitness, it's about creating a lifestyle that empowers you to be stronger, healthier, and more confident.
          </p>
          <div className="flex gap-3 md:gap-5 md:justify-start justify-center py-2 md:py-4">
            <Link to="/pricing"
            className="bg-black hover:bg-gray-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm font-semibold transition">
              Join Now
            </Link>
            <Link to="/programs" className="border md:border-black px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm font-semibold hover:bg-gray-400 hover:text-black transition">
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* الجريد مع أنيميشن */}
        <motion.div
          className="md:w-4xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-3 grid-rows-6 gap-2">
            <div className="col-span-2 row-span-3 rounded-xl">
              <img src={Bg1} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="row-span-4">
              <img src={Bg2} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="row-span-3 rounded-3xl">
              <img src={Bg3} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="row-span-3 rounded-3xl">
              <img src={Bg4} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="row-span-2 rounded-3xl">
              <img src={Bg5} alt="" className="w-full h-full rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
