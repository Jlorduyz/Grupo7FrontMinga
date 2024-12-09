import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavourites } from "../Store/actions/favouritesActions";
import { fetchMangas } from "../Store/reducers/mangaReducer";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Favourites = () => {
    const dispatch = useDispatch();
    const dispatchManga = useDispatch();
    const { favourites, isLoading, error } = useSelector((state) => state.favourites);
    const idUser = useSelector((state) => state.authStore.user?._id);
    
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchFavourites());
        dispatchManga(fetchMangas());
    }, [dispatch]);

    const mangaIds = favourites.map((manga) => manga.manga_id._id);
    console.log("mangaIds", mangaIds);
    console.log("idUser", idUser);
    console.log("favourites", favourites);

    const filteredFavourites = favourites.filter(
        (favourite) => favourite.userId === idUser 
    );
    console.log("filteredFavourites", filteredFavourites);
    
    const handleClick = (id) => {
        navigate(`/detailManga?id=${id}`);
    };

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
                        {isLoading && <p className="text-center">Loading favourites...</p>}
                        {error && <p className="text-center text-red-500">{error}</p>}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {filteredFavourites.length === 0 ? (
                                <p className="text-center text-gray-500">No favourites found</p>
                            ) : (
                                filteredFavourites.map((favourite) => (
                                    <div
                                        key={favourite._id}
                                        className="relative bg-white shadow-lg rounded-lg flex items-center cursor-pointer hover:shadow-xl transition-shadow h-48"
                                    >
                                        <div className="flex-1 p-4 flex flex-col justify-center">
                                            <h3 className="text-lg font-bold text-gray-800">{favourite.manga_id.title}</h3>
                                            <p className="text-sm text-pink-500 mt-1">{favourite.manga_id.category}</p>
                                            <button className="mt-2 px-4 py-1 bg-green-200 text-black rounded-full text-sm hover:bg-green-300" onClick={() => handleClick(favourite.manga_id._id)}>
                                                Read
                                            </button>
                                        </div>
                                        <div className="w-[45%] h-full">
                                            <img
                                                src={favourite.manga_id.cover_photo} 
                                                alt={favourite.manga_id.title}
                                                className="object-cover w-full h-full rounded-l-full"
                                            />
                                        </div>
                                    </div>
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
