import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#1e1e1e] text-[#d3d3d3] py-10">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
                {/* Logo + Newsletter */}
                <div>
                    <h2 className="text-2xl font-bold text-white">FitVibe</h2>
                    <p className="mt-2 text-sm">
                        Join our newsletter to stay up to date on features and releases.
                    </p>
                    <form className="mt-4 flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md bg-[#2c2c2c] text-white focus:outline-none text-sm w-full sm:w-auto"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-2">
                        By subscribing you agree to our <a href="#" className="underline">Privacy Policy</a> and consent to receive updates.
                    </p>
                </div>

                {/* Links - Services */}
                <div className='md:ml-48'>
                    <h3 className="text-sm font-semibold text-white mb-3">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/programs" className="hover:text-gray-400 transition">Challenges</a></li>
                        <li><a href="/programs" className="hover:text-gray-400 transition">Training Plans</a></li>
                        <li><a href="/about" className="hover:text-gray-400 transition">Wellness Tips</a></li>
                        <li><a href="/contact" className="hover:text-gray-400 transition">1-on-1 Coaching</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className='md:ml-24'>
                    <h3 className="text-sm font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex gap-4 text-lg">
                        <a href="#" className="hover:text-gray-400 transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-gray-400 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-gray-400 transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-gray-400 transition"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-xs flex flex-col md:flex-row justify-between items-center px-4 gap-2">
                <p>© {new Date().getFullYear()} FitVibe. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400 transition">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400 transition">Cookies Settings</a>
                </div>
            </div>
        </footer>
    );
}
