import { motion } from "framer-motion";
import { Lightbulb, Target, BarChart3 } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Set Your Goal",
        desc: "Lose weight, build muscle, or maintain — choose what fits you.",
        icon: <Target className="w-14 h-14 text-blue-500" />,
    },
    {
        id: 2,
        title: "Track Your Progress",
        desc: "Log your calories, macros, and workouts with ease.",
        icon: <BarChart3 className="w-14 h-14 text-orange-500" />,
    },
    {
        id: 3,
        title: "Get Smart Suggestions",
        desc: "AI-powered tips and plans tailored to your journey.",
        icon: <Lightbulb className="w-14 h-14 text-purple-500" />,
    },
];

export default function HowItWorkss() {
    return (
        <section className="py-20 md:px-24" id="how-it-works">
            <div className="max-w-5xl mx-auto">
                <h2 className=" md:text-5xl text-3xl font-semibold tracking-tighter text-center mb-12"> How It Works</h2>
                <div className="flex flex-col gap-14">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center  gap-8 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className=" p-6 rounded-2xl shadow-lg bg-white">
                            <div className="flex-shrink-0">{step.icon}</div>
                            <div className="text-left max-w-md">
                                <div className="text-2xl font-medium mb-2 text-black tracking-tighter">
                                    <span className="text-gray-700 mr-2 tracking-tighter">0{step.id}.</span>
                                    {step.title}
                                </div>
                                <p className="text-gray-700 tracking-tighter">{step.desc}</p>
                            </div>
                            </div>
                           
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
