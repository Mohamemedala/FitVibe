import { useState } from 'react';
import { FaDumbbell, FaClock, FaUserCheck, FaStar, FaChevronDown } from 'react-icons/fa';

type FAQItem = {
    question: string;
    answer: string;
    icon: JSX.Element;
};

const faqs: FAQItem[] = [
    {
        question: 'What is FitVibe?',
        answer: 'FitVibe is a fitness platform offering personalized programs, challenges, and expert guidance to help you reach your health goals.',
        icon: <FaDumbbell className="text-purple-600 w-5 h-5" />,
    },
    {
        question: 'How do fitness challenges work?',
        answer: 'Each challenge is designed for a specific goal (fat loss, muscle gain, etc.) and runs for a set duration with daily tasks and progress tracking.',
        icon: <FaClock className="text-green-600 w-5 h-5" />,
    },
    {
        question: 'Is FitVibe suitable for beginners?',
        answer: 'Yes! We offer beginner-friendly plans and guidance to help you get started and progress safely.',
        icon: <FaUserCheck className="text-blue-600 w-5 h-5" />,
    },
    {
        question: 'Do I need any equipment?',
        answer: 'Most of our programs include bodyweight exercises. Some may recommend basic gear, but it’s not mandatory.',
        icon: <FaStar className="text-yellow-500 w-5 h-5" />,
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-3xl mx-auto p-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className=" rounded-xl p-4 shadow-sm bg-white">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left"
                        >
                            <div className="flex items-center gap-3">
                                {faq.icon}
                                <span className="font-medium text-lg">{faq.question}</span>
                            </div>
                            <FaChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <p className="mt-3 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}