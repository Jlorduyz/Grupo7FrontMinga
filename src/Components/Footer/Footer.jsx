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
        <footer className="relative bg-white pb-12"> {/* Espaciado inferior añadido */}
            {/* Imagen de Fondo */}
            <div className="footer-background relative">
                <img
                    src="/images/footer.png"
                    alt="Footer Background"
                    className="w-full h-auto"
                />
            </div>

            {/* Contenido del Footer */}
            <div className="footer-content relative mt-12 px-12 flex justify-between items-center">
                {/* Navegación (Home y Mangas) - Izquierda */}
                <div className="footer-navigation flex space-x-8 text-gray-700 text-lg font-medium">
                    <a href="#home" className="hover:text-pink-500">
                        Home
                    </a>
                    <a href="#mangas" className="hover:text-pink-500">
                        Mangas
                    </a>
                </div>

                {/* Logo Central */}
                <div className="footer-logo mb-8"> {/* Margen inferior añadido */}
                    <img
                        src="/images/logo.png"
                        alt="Minga Logo"
                        className="w-24 h-24"
                    />
                </div>

                {/* Redes Sociales y Botón Donate - Derecha */}
                <div className="footer-social-donate flex flex-col items-end space-y-6">
                    {/* Redes Sociales */}
                    <div className="footer-social flex space-x-6 text-gray-500 text-xl">
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
                        className="bg-gradient-to-r from-pink-400 to-pink-600 text-white w-[150px] py-3 rounded-lg hover:opacity-80 transition duration-300 flex items-center justify-center space-x-2"
                    >
                        <span>Donate</span>
                        <span className="text-xl">💖</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
