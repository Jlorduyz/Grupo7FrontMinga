import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSelection } from "../Store/entitiesSlice";
import Footer from "../Components/Footer/Footer";

const AdminPanel = () => {
    const dispatch = useDispatch();
    const entities = useSelector((state) => state.entities.entities);

    return (
<>
        <div className="bg-gray-100 min-h-screen flex">
            <div className="flex-1 relative">
                <div className="relative">
                    <img
                        src="/images/panel.jpg"
                        alt="Admin Panel Background"
                        className="w-full h-[300px] sm:h-[400px] lg:h-[644px] object-cover"
                    />
                    <div className="absolute top-4 right-4 z-10">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            className="w-10 h-10 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
                        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-6 sm:mb-8">
                            Panel
                        </h1>
                    </div>
                </div>

                <div className="-mt-12 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl relative z-10">
                    <h2 className="text-pink-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8">
                        Entities
                    </h2>
                    <table className="w-full border-collapse table-fixed rounded-lg overflow-hidden">
                        <thead>
                            <tr>
                                <th className="w-1/2 px-4 py-3 text-left bg-gradient-to-r from-pink-500 to-pink-400 text-white font-bold">
                                    Companies
                                </th>
                                <th className="w-1/2 px-4 py-3 text-left bg-white text-pink-500 font-bold">
                                    Authors
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {entities.map((entity) => (
                                <tr
                                    key={entity.id}
                                    className={`border-b ${entity.id % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                                >
                                    <td className="px-4 py-3">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src="/images/Union.png"
                                                alt="Union Icon"
                                                className="w-5 h-5"
                                            />
                                            <div>
                                                <span className="text-blue-500 font-bold">{entity.name}</span>
                                                <span className="text-gray-400 text-sm ml-2">{entity.url}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-between">
                                            <img
                                                src={entity.authorImage}
                                                alt="Author"
                                                className="w-[25px] h-[25px] rounded-full object-cover"
                                            />
                                            <button
                                                onClick={() => dispatch(toggleSelection(entity.id))}
                                                className={`w-10 h-5 rounded-full px-1 flex items-center ${entity.selected
                                                        ? "bg-pink-500 justify-end"
                                                        : "bg-gray-300 justify-start"
                                                    }`}
                                            >
                                                <span
                                                    className={`w-4 h-4 rounded-full ${entity.selected
                                                            ? "bg-white"
                                                            : "bg-pink-500"
                                                        }`}
                                                ></span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
            <Footer></Footer>
            </>
    );
};

export default AdminPanel;
