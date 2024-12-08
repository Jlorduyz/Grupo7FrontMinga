import React from "react";
import Footer from "../Components/Footer/Footer.jsx";
import { useNavigate } from 'react-router-dom';


const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-white">


            <div className="flex-grow flex flex-col justify-center items-center mb-10">

                <img
                    src="/images/error404.png"
                    alt="Error 404"
                    className="w-full max-w-md h-auto mb-6"
                />

                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-6">
                    Sorry, the page you are looking for does not exist.
                </p>


                <button
                    onClick={() => navigate("/home")}
                    className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition"
                >
                    Go Back Home
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Error404;
