import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidebarMenu from "../Components/SidebarMenu";
import { fetchMangas } from "../Store/reducers/mangaReducer";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { setFilter } from "../Store/actions/mangaActions";

const Mangas = () => {
    const dispatch = useDispatch();
    const { mangas, filter, isLoading, error } = useSelector((state) => state.mangas);

    const [searchText, setSearchText] = useState("");

    console.log(mangas);
    
    useEffect(() => {
        dispatch(fetchMangas());
    }, [dispatch]);

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detailManga?id=${id}`);
    };

    // Debugging logs
    console.log("Current filter:", filter); // Verifica el valor del filtro
    console.log("Current search text:", searchText); // Verifica el texto de búsqueda
    console.log("Mangas:", mangas); // Verifica la lista de mangas

    const filteredMangas = mangas.filter((manga) => {
        const matchesCategory = filter === "All" || manga.category_id === filter;
        const matchesSearch = manga.title.toLowerCase().includes(searchText.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    className="w-full h-10 sm:h-12 lg:h-[57px] px-4 border border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mt-12 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl relative z-10">
                        <div className="flex flex-wrap justify-center sm:justify-between items-center mb-6">
                            {["All", "shonen", "seinen", "comics", "shojo"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => {
                                        console.log("Filter clicked:", type);
                                        dispatch(setFilter(type));
                                    }}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </button>
                            ))}
                        </div>

                        {isLoading && <p>Loading mangas...</p>}
                        {error && <p>{error}</p>}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {filteredMangas.map((manga) => (
                                <div
                                    key={manga._id}
                                    className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden"
                                >
                                    <div className="flex-1 p-4 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                                                {manga.title}
                                            </h3>
                                        </div>
                                        <button
                                            className="mt-4 px-4 py-2 bg-green-400 text-white font-semibold rounded-full hover:bg-green-500 transition text-xs sm:text-sm lg:text-base"
                                            onClick={() => handleClick(manga._id)}
                                        >
                                            Read
                                        </button>
                                    </div>
                                    <div className="w-full lg:w-1/2 relative">
                                        <img
                                            src={manga.cover_photo}
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
