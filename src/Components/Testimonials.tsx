import { motion } from "framer-motion";
import Ts1 from "../assets/Ts1.jpg";
import Ts2 from "../assets/Ts2.jpg";
import Ts3 from "../assets/Ts3.png";
import Ts4 from "../assets/Ts4.jpg";
import Ts5 from "../assets/Ts5.jpg";
import Ts6 from "../assets/Ts6.jpg";
import Ts7 from "../assets/Ts7.jpg";
import Ts8 from "../assets/Ts8.jpg";
import Ts9 from "../assets/Ts9.jpg";

// Type definition
export type Testimonial = {
    id: number;
    name: string;
    role: string;
    image: string;
    feedback: string;
};

// Testimonials data
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sara Johnson",
        role: "Yoga Coach",
        image: Ts1,
        feedback:
            "FitVibe transformed my training experience. The smooth scheduling and client management features are top-notch!",
    },
    {
        id: 2,
        name: "David Lee",
        role: "Personal Trainer",
        image: Ts4,
        feedback:
            "The best platform I've used to manage sessions. FitVibe keeps my calendar organized and my clients happy!",
    },
    {
        id: 3,
        name: "Aisha Mohamed",
        role: "Pilates Instructor",
        image: Ts3,
        feedback:
            "I love the design and how intuitive everything is. FitVibe made my life easier!",
    },
    {
        id: 4,
        name: "Carlos Rivera",
        role: "Fitness Coach",
        image: Ts2,
        feedback:
            "My clients love booking through FitVibe. It's quick, easy, and efficient!",
    },
    {
        id: 5,
        name: "Emily Zhang",
        role: "Nutritionist",
        image: Ts5,
        feedback:
            "FitVibe isn’t just for trainers. As a nutritionist, it helps me streamline communication and planning with my clients.",
    },
    {
        id: 6,
        name: "Mohamed Ali",
        role: "Strength Coach",
        image: Ts6,
        feedback:
            "A must-have for fitness professionals. FitVibe has everything I need in one place.",
    },
    {
        id: 7,
        name: "Laura Smith",
        role: "CrossFit Trainer",
        image: Ts8,
        feedback:
            "Everything is smooth and my clients love the experience. FitVibe just works!",
    },
    {
        id: 8,
        name: "James Brown",
        role: "Wellness Coach",
        image: Ts7,
        feedback:
            "I can finally focus on coaching while FitVibe handles the rest. It’s a game changer!",
    },
    {
        id: 9,
        name: "Fatima Noor",
        role: "Health Coach",
        image: Ts9,
        feedback:
            "Clients are booking more consistently thanks to FitVibe’s reminders and ease of use.",
    },
];

// Marquee Component
const TestimonialsMarquee = () => {
    const repeatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="relative overflow-hidden px-6 sm:px-12 md:px-24 py-16 bg-gray-50">
            {/* Title and description */}
            <div className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                    What Our Coaches Say
                </h1>
                <p className="text-gray-600 text-sm md:text-lg md:max-w-3xl tracking-tighter mx-auto">
                    Discover how FitVibe is transforming the daily workflows of coaches and trainers, making client management and scheduling easier than ever.
                </p>
            </div>

            {/* Cards animation container */}
            <div className="relative h-[500px] overflow-hidden">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center"
                    animate={{ y: [0, -300] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {repeatedTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />

                    ))}
                </motion.div>
            </div>
        </div>
    );
};

// Testimonial Card
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-[90%] sm:w-80 md:w-72">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>
            <p className="text-gray-700 text-sm">"{testimonial.feedback}"</p>
        </div>
    );
};

export default TestimonialsMarquee;
