import React from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const Error404 = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header */}
            <Header />

            {/* Contenido principal */}
            <div className="flex-grow flex flex-col justify-center items-center mb-10">

                <img
                    src="/images/error404.png"
                    alt="Error 404"
                    className="w-full max-w-md h-auto mb-6"
                />

                {/* Mensaje */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-6">
                    Sorry, the page you are looking for does not exist.
                </p>


                <a
                    href="/"
                    className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition"
                >
                    Go Back Home
                </a>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Error404;
