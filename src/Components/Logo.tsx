import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import Logo4 from '../assets/logo4.svg';
import Logo5 from '../assets/logo5.png';
import Logo6 from '../assets/logo6.png';
import { motion } from 'framer-motion';

function Logo() {
    const logomov = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

    return (
        <section className="overflow-hidden py-4  md:mx-24 bg-white">
            <div className="relative w-full">
                <motion.div
                    className="flex gap-12 w-max"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                >

                    {[...logomov, ...logomov, ...logomov, ...logomov,
                    ...logomov, ...logomov, ...logomov, ...logomov].map((image, index) => (
                        <img
                            src={image}
                            key={index}
                            alt={`Logo ${index}`}
                            className="w-[120px] h-auto object-contain"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Logo;
