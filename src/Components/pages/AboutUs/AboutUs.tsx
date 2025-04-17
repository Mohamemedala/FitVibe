import Team1 from '../../../assets/team1.jpg'
import Team2 from '../../../assets/team2.jpg'
import Team4 from '../../../assets/team4.jpg'
import Team3 from '../../../assets/team3.jpg'
import Team5 from '../../../assets/team5.jpg'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'

const AboutUs = () => {
    return (
        <div>
            <div className="bg-white text-gray-800 font-sans md:mx-24">

                <section className="px-5 lg:px-24 md:mt-12">
                    <div className="flex flex-col lg:flex-row md:gap-32">
                        <div className="text-sm space-y-2 pt-24 md:block hidden">
                            <p className="font-medium">About us.</p>
                            <p className="text-gray-400">Our team.</p>
                            <p className="text-gray-400">Press.</p>
                        </div>

                        <div className="max-w-3xl space-y-6 text-black text-sm">
                            <div className="text-center">
                                <Link to="/" className="hover:underline tracking-tighter text-gray-500">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-black font-semibold tracking-tighter">Contact</span>
                            </div>

                            <h1 className="md:text-6xl text-3xl font-medium tracking-tighter text-center md:text-center">ABOUT US.</h1>
                            <p className="tracking-tighter md:text-lg text-sm">
                                At FitVibe, we’re all about good vibes and better moves. We make fitness fun, simple, and part of your everyday life no pressure, just progress. Whether you're starting fresh, getting back into your groove, or pushing your limits, we’ve got your back with smart tools, fresh workouts, and daily motivation.
                            </p>
                            <p className="tracking-tighter md:text-lg text-sm">
                                Our goal? To help you build a lifestyle that feels good and fits you. No one-size-fits-all. Just real results, your way. We believe that fitness isn’t about perfection it’s about feeling stronger, more confident, and more alive every day. At FitVibe, your journey is celebrated, your effort is valued, and your vibe is everything.
                            </p>
                            <p className="tracking-tighter md:text-lg text-sm">
                                From curated workout plans and nutrition tips to real-time support from expert trainers, everything we do is built around <strong>you</strong>. We blend technology with human insight to keep you motivated, on track, and excited to show up for yourself.
                            </p>
                            <p className="tracking-tighter md:text-lg text-sm">
                                We’re not just a fitness platform we’re a movement. A community where everyone belongs, every goal matters, and every small win is a big deal. Whether you train at home, hit the gym, or move outdoors, FitVibe is here to amplify your energy and keep your goals within reach.
                            </p>
                            <p className="tracking-tighter md:text-lg text-sm">
                                So, are you ready to feel the vibe? Let’s move smart, stay consistent, and grow stronger together.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Image */}
                <div className="mt-12 md:my-24">
                    <img
                        src={Team1}
                        alt="Team working"
                        className="w-full inset-3 md:px-0 px-2 max-h-[450px] rounded-3xl"
                    />
                </div>

                {/* Quote + Image */}
                <section className="flex md:my-24 flex-col lg:flex-row justify-between items-center gap-12 px-6 lg:px-24">
                    <div className="text-center lg:text-left max-w-md text-xl italic tracking-tighter md:pt-0 pt-6">
                        “At FitVibe, fitness isn’t just a goal it’s a lifestyle. We believe in progress over perfection, and vibes over pressure.”
                        <div className="text-sm mt-2 text-gray-900">— FitVibe Team</div>
                    </div>

                    <img
                        src={Team2}
                        alt="Team member"
                        className="w-full md:max-w-[500px] rounded-xl"
                    />
                </section>

                {/* Team Members */}
                <section className="bg-white py-16 px-4 md:px-20">
                    <div className="grid md:grid-cols-2 items-start gap-12">

                        {/* Images Row */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <img
                                src={Team3}
                                alt="Team Member 1"
                                className="w-50 h-40 object-cover rounded-lg shadow-md"
                            />
                            <img
                                src={Team4}
                                alt="Team Member 2"
                                className="w-50 h-40 object-cover rounded-lg shadow-md"
                            />
                            <img
                                src={Team5}
                                alt="Team Member 3"
                                className="w-50 h-40 object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="ml-auto max-w-xl text-left">
                            <h2 className="text-4xl font-semibold uppercase tracking-wide mb-6">
                                The Team.
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed md:text-lg text-sm tracking-tighter">
                                At FitVibe, we’re more than a team — we’re a movement. United by a passion for wellness and digital innovation, our creators, developers, and strategists bring vibrant energy into every pixel.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed md:text-lg text-sm tracking-tighter">
                                From crafting engaging workout experiences to building communities that thrive, we believe in the power of design, storytelling, and movement. Every line of code, every interface, and every image is built with intention — for people who live and move with purpose.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div>
                                    <p className="text-3xl font-bold">120K+</p>
                                    <p className="text-sm tracking-tighter text-gray-800">Active users<br />on FitVibe</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">85%</p>
                                    <p className="text-sm tracking-tighter text-gray-800">User retention<br />after 30 days</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">4.9⭐</p>
                                    <p className="text-sm tracking-tighter text-gray-800">Average rating<br />across platforms</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">35+</p>
                                    <p className="text-sm tracking-tighter text-gray-800">Team members<br />worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className='pt-32'>
                <Footer />
            </div>
        </div>
    );
};

export default AboutUs;


