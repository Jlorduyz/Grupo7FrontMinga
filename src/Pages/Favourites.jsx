import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidebarMenu from "../Components/SidebarMenu";
import { fetchFavourites } from "../Store/actions/favouritesActions";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Favourites = () => {
    const dispatch = useDispatch();
    const { favourites, isLoading, error } = useSelector((state) => state.favourites);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchFavourites());
    }, [dispatch]);

    const filteredFavourites = favourites.filter((favourite) =>
        favourite.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleClick = (id) => {
        navigate(`/detailManga?id=${id}`);
    };

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex">
                <SidebarMenu />
                <div className="flex-1 relative">
                    <div className="relative">
                        <img
                            src="/images/favourites.jpeg"
                            alt="Favourites Banner"
                            className="w-full h-[300px] sm:h-[400px] lg:h-[644px] object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
                            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-6 sm:mb-8">
                                Favourites
                            </h1>
                            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
                                <input
                                    type="text"
                                    placeholder="Find your favourite manga here"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    className="w-full h-10 sm:h-12 lg:h-[57px] px-4 border border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mt-12 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl relative z-10">
                        {isLoading && <p className="text-center">Loading favourites...</p>}
                        {error && <p className="text-center text-red-500">{error}</p>}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {/* Tarjeta quemada */}
                            <div
                                className="relative bg-white shadow-lg rounded-lg flex items-center cursor-pointer hover:shadow-xl transition-shadow h-48"
                                onClick={() => handleClick("123")}
                            >
                                <div className="flex-1 p-4 flex flex-col justify-center">
                                    <h3 className="text-lg font-bold text-gray-800">Naruto Volume 41</h3>
                                    <p className="text-sm text-orange-500 mt-1">Shonen</p>
                                    <button className="mt-2 px-4 py-1 bg-green-200 text-black rounded-full text-sm hover:bg-green-300">
                                        Read
                                    </button>
                                </div>
                                <div className="w-[45%] h-full">
                                    <img
                                        src="https://i.postimg.cc/3J8zGKHt/naruto.jpg" // Imagen quemada
                                        alt="Naruto Volume 41"
                                        className="object-cover w-full h-full rounded-l-full"
                                    />
                                </div>
                            </div>

                            {/* Tarjetas dinámicas de favoritos */}
                            {filteredFavourites.map((favourite) => (
                                <div
                                    key={favourite._id}
                                    className="relative bg-white shadow-lg rounded-lg flex items-center cursor-pointer hover:shadow-xl transition-shadow h-48"
                                    onClick={() => handleClick(favourite._id)}
                                >
                                    <div className="flex-1 p-4 flex flex-col justify-center">
                                        <h3 className="text-lg font-bold text-gray-800">{favourite.title}</h3>
                                        <p className="text-sm text-pink-500 mt-1">{favourite.category || "Unknown"}</p>
                                        <button className="mt-2 px-4 py-1 bg-green-200 text-black rounded-full text-sm hover:bg-green-300">
                                            Read
                                        </button>
                                    </div>
                                    <div className="w-[45%] h-full">
                                        <img
                                            src={favourite.cover_photo}
                                            alt={favourite.title}
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

export default Favourites;
