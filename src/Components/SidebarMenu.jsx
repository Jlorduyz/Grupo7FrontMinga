import React, { useState } from "react";

const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // Predeterminado como cerrado

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Botón del menú hamburguesa */}
            <button
                onClick={toggleMenu}
                className="fixed top-4 left-4 z-50 focus:outline-none"
            >
                <img
                    src="/images/MenuImage.png" // Usa la imagen de la hamburguesa
                    alt="Menu"
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                />
            </button>

            {/* Fondo del menú desplegable - Versión móvil */}
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
                    <div className="text-lg font-bold">lucasezequielsilva@gmail.com</div>
                    <a href="#home" className="bg-white text-pink-500 px-6 py-2 rounded-full">
                        Home
                    </a>
                    <a href="#register" className="text-white text-lg">
                        Register
                    </a>
                    <a href="#signin" className="text-white text-lg">
                        Sign In
                    </a>
                </div>
            </div>

            {/* Menú desplegable - Versión escritorio */}
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
                    <div className="text-lg font-bold">lucasezequielsilva@gmail.com</div>
                    <a href="#home" className="block bg-white text-pink-500 px-4 py-2 rounded-full">
                        Home
                    </a>
                    <a href="#register" className="block text-white text-lg">
                        Register
                    </a>
                    <a href="#signin" className="block text-white text-lg">
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
