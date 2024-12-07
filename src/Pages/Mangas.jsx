import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidebarMenu from "../Components/SidebarMenu";
import { fetchMangas } from "../Store/reducers/mangaReducer";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { setFilter } from "../Store/actions/mangaActions";
import axios from "axios";

const Mangas = () => {
    const dispatch = useDispatch();
    const { mangas, filter, isLoading, error } = useSelector((state) => state.mangas);
    const [categories, setCategories] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/categories/all")
            .then((response) => {
                setCategories(response.data.response);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    useEffect(() => {
        dispatch(fetchMangas());
    }, [dispatch]);

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detailManga?id=${id}`);
    };

    const filteredMangas = mangas.filter((manga) => {
        const matchesCategory = filter === "All" || manga.category_id === filter;
        const matchesSearch = manga.title.toLowerCase().includes(searchText.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    console.log(filteredMangas);
    console.log(categories);

    


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
                        <div className="flex flex-wrap justify-center sm:justify-start items-center mb-6 space-x-2">
                            {/* Botón para "All" */}
                            <button
                                className={`px-3 py-2 rounded-full text-xs sm:text-sm lg:text-base transition-colors ${filter === "All"
                                        ? "bg-pink-500 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                onClick={() => dispatch(setFilter("All"))}
                            >
                                All
                            </button>
                            {categories.map((type, index) => (
                                <button
                                    key={index}
                                    className={`px-3 py-2 rounded-full text-xs sm:text-sm lg:text-base transition-colors ${filter === type._id
                                            ? "bg-pink-500 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                    onClick={() => dispatch(setFilter(type._id))}
                                >
                                    {type.name}
                                </button>
                            ))}
                        </div>

                        {isLoading && <p className="text-center">Loading mangas...</p>}
                        {error && <p className="text-center text-red-500">{error}</p>}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {filteredMangas.map((manga) => (
                                <div
                                    key={manga._id}
                                    className="relative bg-white shadow-lg rounded-lg flex items-center cursor-pointer hover:shadow-xl transition-shadow h-48"
                                    onClick={() => handleClick(manga._id)}
                                >
                                    <div className="flex-1 p-4 flex flex-col justify-center">
                                        <h3 className="text-lg font-bold text-gray-800">{manga.title}</h3>
                                        {/* Mostrar el nombre de la categoría en lugar del ID */}
                                        <p className="text-sm text-pink-500 mt-1">
                                            {categories.find((cat) => cat._id === manga.category_id)?.name || "Unknown"}
                                        </p>
                                        <button className="mt-2 px-4 py-1 bg-green-200 text-black rounded-full text-sm hover:bg-green-300">
                                            Read
                                        </button>
                                    </div>
                                    <div className="w-[45%] h-full">
                                        <img
                                            src={manga.cover_photo}
                                            alt={manga.title}
                                            className="object-cover w-full h-full rounded-l-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Mangas;
