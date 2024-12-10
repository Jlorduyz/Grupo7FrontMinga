import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const NewRole = () => {
    const authState = useSelector((state) => state.authStore);

    const handleChangeRole = async (roleValue) => {
        try {
            const config = {
                method: 'put',
                url: `http://localhost:8080/api/users/update/email/${authState.user.email}`,
                headers: {
                    Authorization: `Bearer ${authState.token}`,
                    'Content-Type': 'application/json'
                },
                data: { role: roleValue }
            };
            const response = await axios.request(config);
            if (response.status === 200) {
                window.location.href = "/home";
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="flex min-h-screen">
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-8">
                <div className="text-center">
                    <h2 className="text-pink-500 text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                        Change role to
                    </h2>
                    <div className="mb-8">
                        <img
                            src="/images/logo.png"
                            alt="Minga Logo"
                            className="w-32 h-auto mx-auto"
                        />
                    </div>
                    <div className="space-y-4">
                        <div
                            className="flex  bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md p-4 cursor-pointer "
                            onClick={() => handleChangeRole(1)}
                        >
                            <div className="flex items-center w-[15%] mr-2">
                                <img
                                    src="https://image.cdn2.seaart.me/2023-06-28/39391279968325/723b5e2c287e0b72c41974bdc3dc98f68c2d56e2_high.webp"
                                    alt="Authors"
                                    className="w-auto h-auto lg:w-[60%] rounded-full object-cover"
                                />

                            </div>
                            <div className="text-left  w-[65%]">
                                <p className="text-gray-800 font-bold">Join as an Author!</p>
                                <p className="text-gray-500 text-sm">I'm a reader writing a manga</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center  hover:border-pink-500 hover:bg-pink-100 rounded-lg shadow-md p-4 cursor-pointer"
                            onClick={() => handleChangeRole(2)}
                        >
                            <div className="flex items-center w-[15%] mr-2">
                                <img
                                    src="https://image.cdn2.seaart.me/2023-06-28/39391279968325/723b5e2c287e0b72c41974bdc3dc98f68c2d56e2_high.webp"
                                    alt="Company"
                                    className="w-auto h-auto lg:w-[60%] rounded-full object-cover"
                                />
                            </div>
                            <div className="text-left w-[65%]">
                                <p className="text-pink-500 font-bold">Join as a Company!</p>
                                <p className="text-gray-500 text-sm">
                                    I'm a company and I want to publish my comics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="hidden md:block w-1/2 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/images/newrole.jpg')`,
                }}
            >
                <div className="h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50 px-8">
                    <p className="text-xl lg:text-2xl font-semibold text-center mb-4">
                        Minga.com is the best place to find manga reviews. We’ve been super
                        impressed by the quality of applicants.
                    </p>
                    <p className="italic">— Ignacio Borraz</p>
                </div>
            </div>
        </div>
    );
};

export default NewRole;
