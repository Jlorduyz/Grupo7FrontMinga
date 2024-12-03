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
        <footer className="relative bg-white pb-12">
            {/* Imagen de Fondo */}
            <div className="footer-background">
                <img
                    src="/images/footer.png"
                    alt="Footer Background"
                    className="w-full h-auto"
                />
            </div>

            {/* Contenido del Footer */}
            <div className="footer-content relative mt-12 px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                {/* Navegación (Home y Mangas) - Izquierda */}
                <div className="footer-navigation flex flex-col lg:flex-row lg:space-x-8 text-gray-700 text-sm sm:text-base lg:text-lg font-medium items-center lg:items-start space-y-4 lg:space-y-0">
                    <a href="#home" className="hover:text-pink-500">
                        Home
                    </a>
                    <a href="/mangas" className="hover:text-pink-500">
                        Mangas
                    </a>
                    <a href="/manager" className="hover:text-pink-500">
                        Manager
                    </a>


                </div>

                {/* Logo Central */}
                <div className="footer-logo">
                    <img
                        src="/images/logo.png"
                        alt="Minga Logo"
                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
                    />
                </div>

                {/* Redes Sociales y Botón Donate - Derecha */}
                <div className="footer-social-donate flex flex-col items-center lg:items-end space-y-6">
                    {/* Redes Sociales */}
                    <div className="footer-social flex space-x-4 sm:space-x-6 text-gray-500 text-lg sm:text-xl">
                        <a href="#facebook" className="hover:text-pink-500">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#twitter" className="hover:text-pink-500">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#vimeo" className="hover:text-pink-500">
                            <FontAwesomeIcon icon={faVimeoV} />
                        </a>
                        <a href="#youtube" className="hover:text-pink-500">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>

                    {/* Botón Donate */}
                    <button
                        className="bg-gradient-to-r from-pink-400 to-pink-600 text-white w-full sm:w-[150px] py-2 sm:py-3 rounded-lg hover:opacity-80 transition duration-300 flex items-center justify-center space-x-2"
                    >
                        <span>Donate</span>
                        <span className="text-base sm:text-xl">💖</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
