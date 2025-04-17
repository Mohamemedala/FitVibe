import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter() {
    const countersData = [
        { target: 500, label: "Satisfied Athletes", suffix: "+" },
        { target: 95, label: "Success Rate", suffix: "%" },
        { target: 4.9, label: "User Rating", suffix: "⭐" },
        { target: 80, label: "Active Coaches", suffix: "+" },
    ];

    const CounterItem = (target: number, label: string, suffix = '', duration = 2000) => {
        const [count, setCount] = useState(0);
        const ref = useRef(null);
        const inView = useInView(ref, { once: true });

        useEffect(() => {
            if (!inView) return;

            let start = 0;
            const increment = target / (duration / 30);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    start = target;
                    clearInterval(timer);
                }
                setCount(Math.ceil(start));
            }, 30);

            return () => clearInterval(timer);
        }, [inView, target, duration]);

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
            >
                <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">
                    {count}
                    {suffix}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-800 mt-2 tracking-tighter font-bold">{label}</div>
            </motion.div>
        );
    };

    return (
        <div className="flex flex-wrap justify-center items-center p-8 rounded-2xl max-w-5xl mx-auto mt-6 gap-6">
            {countersData.map((item, index) => (
                <div key={index} className="flex-1 min-w-[200px] max-w-xs">
                    {CounterItem(item.target, item.label, item.suffix)}
                </div>
            ))}
        </div>
    );
}

export default Counter;
