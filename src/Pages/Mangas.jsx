import React from "react";

const Mangas = () => {
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
                    {/* Menú Hamburguesa */}
                    <img
                        src="/images/MenuImage.png"
                        alt="Menu"
                        className="w-10 h-10 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                    />
                    {/* Logo */}
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
                    {/* Barra de búsqueda */}
                    <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
                        <input
                            type="text"
                            placeholder="Find your manga here"
                            className="w-full h-10 sm:h-12 lg:h-[57px] px-4 border border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                        />
                    </div>
                </div>
            </div>

            {/* Contenedor de la lista de mangas */}
            <div className="-mt-12 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl relative z-10">
                {/* Filtros */}
                <div className="flex flex-wrap justify-center sm:justify-between items-center mb-6">
                    <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
                        <button className="px-3 py-2 bg-gray-200 rounded-full text-gray-700 text-xs sm:text-sm lg:text-base">
                            All
                        </button>
                        <button className="px-3 py-2 bg-red-100 rounded-full text-red-500 text-xs sm:text-sm lg:text-base">
                            Shōnen
                        </button>
                        <button className="px-3 py-2 bg-orange-100 rounded-full text-orange-500 text-xs sm:text-sm lg:text-base">
                            Seinen
                        </button>
                        <button className="px-3 py-2 bg-green-100 rounded-full text-green-500 text-xs sm:text-sm lg:text-base">
                            Shōjo
                        </button>
                        <button className="px-3 py-2 bg-purple-100 rounded-full text-purple-500 text-xs sm:text-sm lg:text-base">
                            Kodomo
                        </button>
                    </div>
                </div>

                {/* Lista de mangas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Tarjeta de Manga */}
                    <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden">
                        {/* Barra lateral izquierda */}
                        <div className="bg-orange-500 w-full lg:w-2"></div>

                        {/* Contenido de texto */}
                        <div className="flex-1 p-4 flex flex-col justify-between">
                            <div>
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                                    Naruto Volume 41
                                </h3>
                                <p className="text-xs sm:text-sm text-orange-500">Type</p>
                            </div>
                            <button className="mt-4 px-4 py-2 bg-green-400 text-white font-semibold rounded-full hover:bg-green-500 transition text-xs sm:text-sm lg:text-base">
                                Read
                            </button>
                        </div>

                        {/* Imagen del manga */}
                        <div className="w-full lg:w-1/2 relative">
                            <img
                                src="/images/naruto.jpg"
                                alt="Naruto Volume 41"
                                className="w-full h-40 sm:h-48 lg:h-full object-cover"
                                style={{
                                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mangas;
