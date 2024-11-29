import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faVimeoV,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="relative bg-white">
            {/* Imagen de Fondo */}
            <div className="relative">
                <img
                    src="/images/footer.png"
                    alt="Footer Background"
                    className="w-full h-auto"
                />
            </div>

            {/* Contenido del Footer */}
            <div className="relative flex justify-between items-center px-12 mt-12 mb-12">
                {/* Navegación (Izquierda) */}
                <nav className="flex space-x-12 text-gray-700 text-lg font-medium">
                    <a href="#home" className="hover:text-pink-500">
                        Home
                    </a>
                    <a href="#mangas" className="hover:text-pink-500">
                        Mangas
                    </a>
                </nav>

                {/* Logo Central */}
                <div className="flex justify-center">
                    <img
                        src="/images/logo.png"
                        alt="Minga Logo"
                        className="w-24 h-24"
                    />
                </div>

                {/* Redes Sociales y Botón Donate (Derecha) */}
                <div className="flex flex-col items-end space-y-4">
                    {/* Redes Sociales */}
                    <div className="flex space-x-6 text-gray-500 text-2xl">
                        <a
                            href="#facebook"
                            className="hover:text-pink-500 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a
                            href="#twitter"
                            className="hover:text-pink-500 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                            href="#vimeo"
                            className="hover:text-pink-500 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faVimeoV} />
                        </a>
                        <a
                            href="#youtube"
                            className="hover:text-pink-500 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>

                    {/* Botón Donate */}
                    <div className="flex justify-center w-full">
                        <button
                            className="bg-gradient-to-r from-pink-400 to-pink-600 text-white w-[150px] py-3 rounded-lg hover:opacity-80 transition duration-300 flex items-center justify-center space-x-2"
                        >
                            <span>Donate</span>
                            <span className="text-xl">💖</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
