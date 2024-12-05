import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData, setFilter } from "../Store/managerSlice"; // Importa las acciones del Manager
import SidebarMenu from "../Components/SidebarMenu";

const Manager = () => {
    const dispatch = useDispatch();
    const { data, filter } = useSelector((state) => state.manager); // Accede al estado del Manager

    // Simula la carga inicial de datos
    useEffect(() => {
        const fetchData = async () => {
            const managerData = [
                { id: 1, title: "Naruto Volume 41", type: "Shōnen", image: "/images/naruto.jpg" },
                { id: 2, title: "Attack on Titan", type: "Seinen", image: "/images/manager.jpg" },
                { id: 3, title: "Sailor Moon", type: "Shōjo", image: "/images/manga.jpg" },
                // Agrega más datos específicos
            ];
            dispatch(setData(managerData)); // Actualiza el estado con los datos del Manager
        };
        fetchData();
    }, [dispatch]);

    // Filtra los datos según el filtro activo
    const filteredData = data.filter((item) =>
        filter === "All" ? true : item.type === filter
    );

    return (
        <div className="bg-gray-100 min-h-screen relative">
            <SidebarMenu />

            <div className="relative z-0">
                <img
                    src="/images/manager.jpg"
                    alt="Manager Banner"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[644px] object-cover"
                />
                <div className="absolute top-4 right-4 flex items-center z-10">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center z-10">
                    <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-6 sm:mb-8">
                        Manager Section
                    </h1>
                    <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
                        <input
                            type="text"
                            placeholder="Find your manga here"
                            className="w-full h-10 sm:h-12 lg:h-[57px] px-4 border border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                        />
                    </div>
                </div>
            </div>

            <div className="relative -mt-20 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl z-10">
                <div className="flex flex-wrap justify-center sm:justify-between items-center mb-6">
                    {["All", "Shōnen", "Seinen", "Shōjo", "Kodomo"].map((type) => (
                        <button
                            key={type}
                            onClick={() => dispatch(setFilter(type))} // Cambia el filtro en el estado del Manager
                            className={`px-3 py-2 rounded-full text-xs sm:text-sm lg:text-base ${filter === type
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden"
                        >
                            <div className="bg-orange-500 w-full lg:w-2"></div>
                            <div className="flex-1 p-4 flex flex-col justify-between">
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-orange-500">{item.type}</p>
                                <button className="mt-4 px-4 py-2 bg-green-400 text-white font-semibold rounded-full hover:bg-green-500 transition text-xs sm:text-sm lg:text-base">
                                    Read
                                </button>
                            </div>
                            <div className="w-full lg:w-1/2 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-40 sm:h-48 lg:h-full object-cover"
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Manager;
