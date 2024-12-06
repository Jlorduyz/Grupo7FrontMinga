import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidebarMenu from "../Components/SidebarMenu";
import { fetchMangas } from "../Store/reducers/mangaReducer";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Mangas = () => {
    const dispatch = useDispatch();
    const { mangas, filter, isLoading, error } = useSelector((state) => state.mangas);

    useEffect(() => {
        dispatch(fetchMangas());
    }, [dispatch]);

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detailManga?id=${id}`);
    }
    // Filtrado de mangas (si lo deseas)
    const filteredMangas = filter === "All" 
        ? mangas 
        : mangas.filter((manga) => manga.category === filter);

    return (
        <>
        <div className="bg-gray-100 min-h-screen flex">
            <SidebarMenu />
            <div className="flex-1 relative">
                <div className="relative">
                    <img
                        src="/images/manga.jpg"
                        alt="Manga Banner"
                        className="w-full h-[300px] sm:h-[400px] lg:h-[644px] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
                        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-6 sm:mb-8">
                            Mangas
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
                <div className="-mt-12 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl relative z-10">
                    <div className="flex flex-wrap justify-center sm:justify-between items-center mb-6">
                        {["All", "Shōnen", "Seinen", "Shōjo", "Kodomo"].map((type) => (
                            <button
                                key={type}
                                className={`px-3 py-2 rounded-full text-xs sm:text-sm lg:text-base ${
                                    filter === type
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Mostramos estado de carga o error */}
                    {isLoading && <p>Loading mangas...</p>}
                    {error && <p>{error}</p>}

                    {/* Lista de mangas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {filteredMangas.map((manga) => (
                            <div
                                key={manga._id} // Ajustar la key según el campo único del manga
                                className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden"
                            >
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                                            {manga.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-orange-500">
                                            {manga.category}
                                        </p>
                                    </div>
                                    <button className="mt-4 px-4 py-2 bg-green-400 text-white font-semibold rounded-full hover:bg-green-500 transition text-xs sm:text-sm lg:text-base"
                                    onClick={() => handleClick(manga._id)}>
                                        Read
                                    </button>
                                </div>
                                <div className="w-full lg:w-1/2 relative">
                                    <img
                                        src={manga.cover_photo} // Ajustar el campo según tu API
                                        alt={manga.title}
                                        className="w-full h-40 sm:h-48 lg:h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default Mangas;
