import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WelcomeBack() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("http://localhost:8080/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Failed to log in. Please try again.");
                return;
            }

            navigate("/home");
        } catch (err) {
            console.error("Network error:", err);
            setError("A network error occurred. Please try again.");
        }
    };

    return (
        <div className="h-screen flex">
            <div className="flex w-1/2 justify-around items-center bg-cover bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/cd7b/cfec/c07083cef0707bd5864b287bac613f2b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aa72~qaQ-Re8JBUPxzkxXnEmKnF~Nksubt4JQlzlSyaNzCKI0yOFHb4M3jaIdNjawWVO7VvkTsBWhTN03z4KsmZA8WhV2jMxWVM2PJAnD0piJN30WPlc~QnVykKFP4CwvEbbwihCfqj9VoAAHWocAqPpcZDmnlZvtbifXp5LaI6iv8fUVn5-MuCjlzaYt1mRYVISghahbU3i2vVtbPt5V7gYm5Kq6vJX4et7u36v8lwqsnUviMfvNVJlj3t1c8l6vYcPmsBFDMzEU~6r3HAvc-IIchLyEBooDoJHVTy9IaK2pFeS-Gwe3nW6UApCQiKHRAitgbRjVrp7MqrZqRXw4g__' }}></div>

            <div className="flex w-1/2 justify-center items-center bg-white">
                <div className="bg-white relative">
                    <form onSubmit={handleSubmit}>
                        <div className="text-center">
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome <span className="text-custom-pink">back</span>!</h1>
                            <p className="text-sm font-normal text-gray-600 mb-7">Discover manga and comics, track your progress, have fun, read manga.</p>
                        </div>

                        <div className="relative mb-4">
                            <div className="absolute top-[-8px] left-3 text-sm text-custom-pink bg-white px-1 ">Email</div>
                            <div className="border-2 border-solid border-gray-400 rounded-2xl px-3 py-2 pt-6">
                                <div className="flex items-center justify-between">
                                    <input
                                        className="pl-2 pr-8 outline-none border-none w-full"
                                        type="text"
                                        placeholder="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="relative mb-4">
                            <div className="absolute top-[-8px] left-3 text-sm text-custom-pink bg-white px-1 ">Password</div>
                            <div className="border-2 border-solid border-gray-400 rounded-2xl px-3 py-2 pt-6">
                                <div className="flex items-center justify-between">
                                    <input
                                        className="pl-2 pr-8 outline-none border-none w-full"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="block w-full h-12 bg-custom-pink mt-4 py-2 rounded-2xl text-white font-semibold mb-2 shadow-custom-yellow hover:bg-custom-pink-dark focus:ring-4 focus:ring-custom-yellow">Sign in</button>
                        <br />
                    </form>

                    <button className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium text-opacity-80 transition duration-300 rounded-2xl border-2 border-grey-500 text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                        <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="Google logo" />
                        Sign in with Google
                    </button>

                    <div className="text-center mb-4">
                        <span className="text-sm text-gray-600">
                            you don't have an account yet?
                            <a href="#" className="text-custom-pink hover:text-custom-pink-dark"> Sign up</a>
                        </span>
                    </div>

                    <div className="text-center">
                        <span className="text-sm text-gray-600">
                            Go back to
                            <a href="#" className="text-custom-pink hover:text-custom-pink-dark"> home page</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { WelcomeBack };
