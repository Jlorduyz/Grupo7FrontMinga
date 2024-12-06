import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData, setFilter } from "../Store/actions/managerActions"; // Importa las acciones
import SidebarMenu from "../Components/SidebarMenu";
import Footer from "../Components/Footer/Footer";

const Manager = () => {
    const dispatch = useDispatch();
    const { data, filter } = useSelector((state) => state.manager); // Accede al estado del Manager

    useEffect(() => {
        const fetchData = async () => {
            const managerData = [
                { id: 1, title: "Naruto Volume 41", type: "Shōnen", image: "/images/naruto.jpg" },
                { id: 2, title: "Attack on Titan", type: "Seinen", image: "/images/manager.jpg" },
                { id: 3, title: "Sailor Moon", type: "Shōjo", image: "/images/manga.jpg" },
            ];
            dispatch(setData(managerData)); // Despacha la acción
            console.log("Fetched data:", managerData); // Verifica la carga
        };
        
        fetchData();
    }, [dispatch]);

    const filteredData = data.filter((item) =>
        filter === "All" ? true : item.type === filter
    );

    console.log("Filtered Data:", filteredData);

    return (
        <div className="bg-gray-100 min-h-screen relative">
            <SidebarMenu />

            {/* Banner superior */}
            <div className="relative z-0">
                <img
                    src="/images/manager.jpg"
                    alt="Manager Banner"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center z-10">
                    <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-6 sm:mb-8">
                        Manager Section
                    </h1>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="relative -mt-20 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl z-10">
                {/* Filtros */}
                <div className="flex flex-wrap justify-center sm:justify-between items-center mb-6">
                    {["All", "Shōnen", "Seinen", "Shōjo"].map((type) => (
                        <button
                            key={type}
                            onClick={() => dispatch(setFilter(type))} // Cambia el filtro
                            className={`px-3 py-2 rounded-full text-xs sm:text-sm lg:text-base ${filter === type
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Lista de datos filtrados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-lg rounded-lg flex flex-col overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 sm:h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col">
                                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.type}</p>
                                <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition text-sm">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Manager;
