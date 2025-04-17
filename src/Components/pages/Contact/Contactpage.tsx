import React, { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import { FiMessageCircle } from "react-icons/fi"
import { MdFitnessCenter, MdOutlineSubject, MdPhone } from "react-icons/md"
import { FaMapMarkerAlt } from "react-icons/fa"
import { motion } from 'framer-motion'
import Footer from "../../Footer"

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}


const Contactpage: React.FC = () => {
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
        setSuccess(true)
        setTimeout(() => setSuccess(false), 5000)
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* المحتوى الرئيسي */}
            <main className="flex-grow px-4 py-10 sm:px-8 md:px-16 lg:px-32 space-y-10">

                {/* 🔗 Breadcrumb */}
                <motion.div
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="text-center">
                        <Link to="/" className="hover:underline tracking-tighter text-gray-500">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-black font-semibold tracking-tighter">Contact</span>
                    </div>
                </motion.div>

                {/* 🏋‍♀ Title */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="md:text-6xl text-4xl font-medium tracking-tighter mb-2 text-gray-800">Get in Touch with FitVibe</h1>
                    <p className="text-gray-600 max-w-sm mx-auto text-lg tracking-tighter">
                        We’re here to support your fitness journey whether it's a question, suggestion, or collaboration!
                    </p>
                </motion.div>

                {/* 📇 Contact Info */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="bg-gray-100 p-6 rounded-xl text-center">
                        <FaMapMarkerAlt className="text-3xl text-black mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
                        <p className="text-gray-600">FitVibe Gym, Downtown, New York</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-xl text-center">
                        <MdPhone className="text-3xl text-black mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                        <p className="text-gray-600">+1 234 567 890</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-xl text-center">
                        <AiOutlineMail className="text-3xl text-black mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                        <p className="text-gray-600">contact@fitvibe.com</p>
                    </div>
                </motion.div>

                {/* 🚀 Contact Form */}
                <motion.form
                    className="max-w-2xl mx-auto bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-md space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    onSubmit={handleSubmit}
                >
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                            <AiOutlineUser />
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                            <AiOutlineMail />
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                            <MdOutlineSubject />
                            I’m reaching out about
                        </label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a subject</option>
                            <option value="Joining a fitness program">Joining a fitness program</option>
                            <option value="Nutrition consultation">Nutrition consultation</option>
                            <option value="Collaborating as a trainer">Collaborating as a trainer</option>
                            <option value="Technical issue / feedback">Technical issue / feedback</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                            <FiMessageCircle />
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell us how we can help..."
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 w-full flex items-center justify-center gap-2"
                    >
                        <MdFitnessCenter />
                        Send to FitVibe
                    </button>
                </motion.form>

                {/* 💬 Success Message */}
                {success && (
                    <motion.div
                        className="text-center mt-6 text-green-600 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        ✅ Your message has been sent successfully! We will get back to you soon.
                    </motion.div>
                )}
            </main>

            <Footer />
        </div>
    )
}

export default Contactpage
