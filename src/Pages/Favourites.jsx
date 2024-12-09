// src/Pages/Favourites.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavourites } from "../Store/actions/favouritesActions";
import { fetchMangas } from "../Store/reducers/mangaReducer";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Filters from "../Components/Filters";
import MangaCard from "../Components/MangaCard";
import axios from "axios";

const Favourites = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { favourites, isLoading, error } = useSelector((state) => state.favourites);
    const idUser = useSelector((state) => state.authStore.user?._id);

    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState("All");
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
        dispatch(fetchFavourites());
        dispatch(fetchMangas());
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/detailManga?id=${id}`);
    };

    const filteredFavourites = favourites.filter((favourite) => {
        const matchesUser = favourite.userId === idUser;
        const matchesCategory = filter === "All" || (favourite.manga_id.category_id === filter);
        const matchesSearch = favourite.manga_id.title.toLowerCase().includes(searchText.toLowerCase());
        return matchesUser && matchesCategory && matchesSearch;
    });

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex">
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
                        <Filters categories={categories} filter={filter} setFilter={setFilter} />

                        {isLoading && <p className="text-center">Loading favourites... <img className="flex items-center justify-center" src="https://giffiles.alphacoders.com/170/170278.gif" alt="Loading" /></p>}
                        {error && <p className="text-center text-red-500">{error}</p>}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {filteredFavourites.length === 0 ? (
                                <p className="text-center text-gray-500">No favourites found</p>
                            ) : (
                                filteredFavourites.map((favourite) => (
                                    <MangaCard
                                        key={favourite._id}
                                        manga={favourite.manga_id}
                                        categories={categories}
                                        onClick={handleClick}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Favourites;
