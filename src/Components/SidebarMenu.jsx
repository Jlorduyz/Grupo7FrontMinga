import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../Store/actions/authActions.js";


const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate("/signin");
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
                className={`fixed top-0 left-0 h-full z-40 bg-pink-300 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } ${window.innerWidth < 768 ? "w-full" : "w-64"}`}
            >
                <div className="flex flex-col justify-center items-center h-full space-y-8 text-white">
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-white text-3xl"
                    >
                        ×
                    </button>

                    <button
              onClick={handleLogout}
              className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
            >
              Logout
            </button>

                    <button
                        onClick={() => navigate("/Home")}
                        className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate("/welcome")}
                        className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                    >
                        Register
                    </button>
                    <button
                        onClick={() => navigate("/welcomeback")}
                        className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
