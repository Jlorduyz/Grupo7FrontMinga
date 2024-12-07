import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleMenu}
                className={`fixed top-4 left-4 z-50 focus:outline-none transition-transform duration-300 ${isOpen ? "hidden" : "block"}`}
            >
                <img
                    src="/images/MenuImage.png"
                    alt="Menu"
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                />
            </button>

            <div
                className={`fixed top-0 left-0 w-full h-full bg-pink-300 z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden`}
            >
                <div className="flex flex-col justify-center items-center h-full space-y-6 text-white">
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-white text-3xl"
                    >
                        ×
                    </button>
                    <button
                        onClick={() => navigate("/Home")}
                        className="bg-white text-pink-500 px-6 py-2 rounded-full"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate("/welcome")}
                        className="bg-white text-pink-500 px-6 py-2 rounded-full"
                    >
                        Register
                    </button>
                    <button
                        onClick={() => navigate("/welcomeback")}
                        className="bg-white text-pink-500 px-6 py-2 rounded-full"
                    >
                        Sign In
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-full bg-pink-300 z-40 transition-transform duration-300 ${isOpen ? "w-64" : "w-0"
                    } hidden lg:block`}
            >
                <div
                    className={`p-6 space-y-6 text-white transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-white text-3xl"
                    >
                        ×
                    </button>
                    <button
                        onClick={() => navigate("/Home")}
                        className="bg-white text-pink-500 px-6 py-2 rounded-full"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate("/welcome")}
                        className="bg-white text-pink-500 px-6 py-2 rounded-full"
                    >
                        Register
                    </button>
                    <button
                        onClick={() => navigate("/welcomeback")}
                        className="bg-white text-pink-500 px-6 py-2 rounded-full"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;