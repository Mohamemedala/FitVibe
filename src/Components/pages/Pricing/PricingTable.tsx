import { Dumbbell, HeartPulse, Flame } from "lucide-react";

// Feature type definitions
type FeatureKey = 'sessions' | 'types' | 'coaches' | 'download' | 'support';

type Plan = {
    name: string;
    price: string;
    features: Record<FeatureKey, string>;
    cta: string;
};

// Plan data
const plans: Plan[] = [
    {
        name: "Starter",
        price: "Free",
        cta: "Start Free",
        features: {
            sessions: "2/week",
            types: "Cardio only",
            coaches: "No",
            download: "No",
            support: "Community only",
        },
    },
    {
        name: "Pro",
        price: "$9.99/mo",
        cta: "Subscribe Now",
        features: {
            sessions: "5/week",
            types: "Cardio, Strength, HIIT",
            coaches: "Yes",
            download: "Yes",
            support: "Email support",
        },
    },
    {
        name: "Elite",
        price: "$19.99/mo",
        cta: "Go Premium",
        features: {
            sessions: "Unlimited",
            types: "All types + custom plans",
            coaches: "Priority access",
            download: "Offline + HD",
            support: "24/7 live chat",
        },
    },
];

const featureLabels: Record<FeatureKey, string> = {
    sessions: "Weekly Sessions",
    types: "Workout Types",
    coaches: "Coach Access",
    download: "Content Download",
    support: "Direct Support",
};

const PricingTable = () => {
    return (
        <div className="py-16 px-4 sm:px-10 md:px-20 lg:px-48 relative">
            {/* Background Shape */}
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

            {/* Promo Banner */}
            <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                    💥 Save 20% on annual plans
                </div>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 tracking-tighter">Choose Your Plan</h2>
            <p className="text-center text-sm text-gray-700 tracking-tighter md:max-w-[500px] md:text-lg mb-10 mx-auto">
                Whether you're just starting out or want full access to everything, we've got a plan that fits your fitness journey.
            </p>

            {/* Pricing Table */}
            <div className="overflow-x-auto">
                <table className="min-w-[600px] max-w-[900px] mx-auto bg-white text-black shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-4 text-base font-semibold">Feature</th>
                            {plans.map((plan) => (
                                <th key={plan.name} className="p-4 text-base font-semibold text-center">
                                    <div className="flex flex-col items-center gap-1">
                                        {plan.name === "Starter" && <Dumbbell size={20} className="text-gray-500" />}
                                        {plan.name === "Pro" && <HeartPulse size={20} className="text-purple-500" />}
                                        {plan.name === "Elite" && <Flame size={20} className="text-red-500" />}
                                        <span>{plan.name}</span>
                                        <span className="text-sm font-normal">{plan.price}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {(Object.keys(featureLabels) as FeatureKey[]).map((key) => (
                            <tr key={key} className="border-t">
                                <td className="p-4 font-medium">{featureLabels[key]}</td>
                                {plans.map((plan) => (
                                    <td key={plan.name + key} className="p-4 text-center">
                                        {plan.features[key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr className="border-t">
                            <td className="p-4 font-medium"></td>
                            {plans.map((plan) => (
                                <td key={plan.name + "cta"} className="p-4 text-center">
                                    <button
                                        className={`w-full text-sm sm:text-base px-4 py-2 rounded transition ${plan.name === "Starter"
                                                ? "border border-gray-400 text-gray-900 bg-white hover:bg-gray-300"
                                                : "bg-black text-white hover:bg-gray-600"
                                            }`}
                                    >
                                        {plan.cta}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PricingTable;
