import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faVimeoV, faYoutube, } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="relative bg-white pb-12">
            <div className="footer-background">
                <img
                    src="/images/footer.png"
                    alt="Footer Background"
                    className="w-full h-auto"
                />
            </div>

            <div className="footer-content relative mt-12 px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                <div className="footer-navigation flex flex-col lg:flex-row lg:space-x-8 text-gray-700 text-sm sm:text-base lg:text-lg font-medium items-center lg:items-start space-y-4 lg:space-y-0">
                    <button onClick={() => navigate("/home")} className="hover:text-pink-500">
                        Home
                    </button>
                    <button onClick={() => navigate("/mangas")} className="hover:text-pink-500">
                        Mangas
                    </button>







                </div>

                <div className="footer-logo">
                    <button onClick={() => navigate("/home")} className="hover:text-pink-500">
                        <img
                            src="/images/logo.png"
                            alt="Minga Logo"
                            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
                        />
                    </button>
                </div>

                <div className="footer-social-donate flex flex-col items-center lg:items-center space-y-6">
                    <div className="footer-social-donate flex flex-col items-center lg:items-end space-y-6">
                        <div className="footer-social flex space-x-4 sm:space-x-6 text-gray-500 text-lg sm:text-xl">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500"
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a
                                href="https://vimeo.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500"
                            >
                                <FontAwesomeIcon icon={faVimeoV} />
                            </a>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500"
                            >
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>

                            <a
                                href="https://github.com/Jlorduyz/Grupo7FrontMinga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>

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
