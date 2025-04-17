import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import PricingTable from "../Pricing/PricingTable";
import FAQ from "../Pricing/FAQ";
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

export default function Pricingpage() {
    type CardProps = {
        title: string;
        price: string;
        description: string;
        features: string[];
        delay?: number;
    };

    const Card: React.FC<CardProps> = ({ title, price, description, features, delay = 0 }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                }}
                className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 shadow-md cursor-pointer"
            >
                <h3 className="text-base font-semibold text-indigo-600">{title}</h3>
                <p className="mt-4 text-5xl font-semibold tracking-tight text-gray-900">{price}</p>
                <p className="mt-2 text-gray-600">{description}</p>
                <ul className="mt-6 space-y-2">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-700">
                            <CheckCircle className="h-5 w-5 text-indigo-500 mt-1" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        );
    };

    return (
        <div>
            <div className="relative isolate bg-white px-6 md:py-12 sm:py-32 lg:px-8">
                <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
                    <div
                        className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>

                <div className="mx-auto max-w-4xl text-center">
                <div className="text-center">
                        <Link to="/" className="hover:underline tracking-tighter text-gray-500">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-black font-semibold tracking-tighter">Pricing</span>
                    </div>
                    <p className="mt-2 text-3xl font-medium tracking-tighter text-gray-900 sm:text-6xl">
                        Choose the right plan for you
                    </p>
                </div>

                <p className="mx-auto mt-6 max-w-sm tracking-tighter text-center text-sm text-gray-600 sm:text-lg">
                    Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
                </p>

                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
                    <Card
                        title="Hobby"
                        price="$29"
                        description="The perfect plan if you're just getting started with our product."
                        features={[
                            "Access to basic workouts",
                            "Weekly progress tracking",
                            "Standard meal plans",
                            "Join fitness community",
                            "Limited access to coaches",
                            "1 device login"
                        ]}
                        delay={0}
                    />
                    <Card
                        title="Pro"
                        price="$49"
                        description="Advanced features for those who need more."
                        features={[
                            "Everything in Hobby",
                            "Personalized workout plans",
                            "Advanced nutrition tracking",
                            "Direct chat with coaches",
                            "Exclusive Pro challenges",
                            "Sync with wearables",
                            "Priority support",
                            "3 devices login"
                        ]}
                        delay={0.2}
                    />
                    <Card
                        title="Enterprise"
                        price="$99"
                        description="All the premium features and dedicated support for businesses."
                        features={[
                            "Everything in Pro",
                            "Team or group workout plans",
                            "Company wellness analytics",
                            "Custom branding for your team",
                            "Dedicated onboarding support",
                            "Monthly coaching sessions",
                            "Admin dashboard access"
                        ]}
                        delay={0.4}
                    />
                </div>
            </div>

            <div className="pt-20">
                <PricingTable />
            </div>

            <div className="pt-20">
                <FAQ />
            </div>

            <div className="pt-32">
                <Footer />
            </div>
        </div>
    );
}
