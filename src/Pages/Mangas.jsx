import React, { useEffect, useState } from "react";

const Mangas = () => {
    const [mangas, setMangas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMangas = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/mangas/all");
                if (!response.ok) {
                    throw new Error("Failed to fetch mangas");
                }
                const data = await response.json();
                setMangas(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMangas();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Banner */}
            <div className="relative">
                <img
                    src="/images/manga.jpg"
                    alt="Manga Banner"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[644px] object-cover"
                />
                {/* Menú Hamburguesa y Logo */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <img
                        src="/images/MenuImage.png"
                        alt="Menu"
                        className="w-10 h-10 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                    />
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="w-10 h-10 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                    />
                </div>
                {/* Título Central */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
                    <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-6 sm:mb-8">
                        Mangas
                    </h1>
                </div>
            </div>

            {/* Contenedor de la lista de mangas */}
            <div className="-mt-12 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl relative z-10">
                {loading ? (
                    <p className="text-center text-gray-500">Loading mangas...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {mangas.map((manga) => (
                            <div
                                key={manga._id}
                                className="bg-white shadow-lg rounded-lg flex flex-col overflow-hidden"
                            >
                                {/* Imagen del manga */}
                                <div className="w-full relative">
                                    <img
                                        src={manga.cover_photo}
                                        alt={manga.title}
                                        className="w-full h-40 sm:h-48 lg:h-full object-cover"
                                    />
                                </div>
                                {/* Contenido */}
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                                            {manga.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-orange-500">{manga.category_id}</p>
                                    </div>
                                    <button className="mt-4 px-4 py-2 bg-green-400 text-white font-semibold rounded-full hover:bg-green-500 transition text-xs sm:text-sm lg:text-base">
                                        Read
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Mangas;
