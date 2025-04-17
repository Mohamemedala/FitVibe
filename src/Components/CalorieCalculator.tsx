import React, { useState } from "react";
import Imgg from '../assets/imgg1.jpg'

const CalorieCalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [activity, setActivity] = useState("1.2");
    const [calories, setCalories] = useState<number | null>(null);

    const calculateCalories = (e: React.FormEvent) => {
        e.preventDefault();

        const w = parseFloat(weight);
        const h = parseFloat(height);
        const a = parseInt(age);
        const act = parseFloat(activity);

        let bmr;
        if (gender === "male") {
            bmr = 10 * w + 6.25 * h - 5 * a + 5;
        } else {
            bmr = 10 * w + 6.25 * h - 5 * a - 161;
        }

        const result = Math.round(bmr * act);
        setCalories(result);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 bg-gray-50 rounded-xl py-10 md:mx-24">
            {/* الصورة على الشمال */}
            <div className="px-5">
                <img
                    src={Imgg}
                    alt="Fitness"
                    className="w-[400px] h-auto object-cover rounded-2xl shadow-md"
                />
            </div>

            {/* الفورم على اليمين */}
            <div className="w-full md:max-w-[400px]  p-6 ">
                <h2 className="md:text-5xl font-semibold mb-4 text-center tracking-tighter text-black">
                    Calorie Calculator
                </h2>

                <form onSubmit={calculateCalories} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium text-black">Weight (kg)</label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full border rounded p-2 tracking-tighter text-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium tracking-tighter text-black">Height (cm)</label>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full border rounded p-2 tracking-tighter text-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium tracking-tighter text-black">Age (years)</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full border rounded p-2 tracking-tighter text-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium tracking-tighter text-black">Gender</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full border rounded p-2 text-black"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-medium tracking-tighter text-black">Activity Level</label>
                        <select
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                            className="w-full border rounded p-2 text-black"
                        >
                            <option value="1.2">Sedentary (little or no exercise)</option>
                            <option value="1.375">Lightly active (1-3 days/week)</option>
                            <option value="1.55">Moderately active (3-5 days/week)</option>
                            <option value="1.725">Very active (6-7 days/week)</option>
                            <option value="1.9">Super active (physical job)</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded hover:bg-gray-700 transition"
                        >
                            Calculate
                        </button>
                    </div>
                </form>

                {calories !== null && (
                    <div className="mt-6 text-center text-gray-700 text-lg tracking-tighter font-semibold">
                        your daily calorie needs: {calories} kcal
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalorieCalculator;
