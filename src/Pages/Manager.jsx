import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../Store/actions/managerActions"; 
import { fetchMangas } from "../Store/reducers/mangaReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer/Footer";
import Filters from "../Components/Filters"; 
import { categoryStyles, defaultStyles } from "../Components/Filters";

const Manager = () => {
    const dispatch = useDispatch();
    const { mangas, filter, isLoading, error } = useSelector((state) => state.mangas);
    const idUser = useSelector((state) => state.authStore.user?._id); 
    const role = useSelector((state) => state.authStore.user?.role); 
    const [categories, setCategories] = useState([]);

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
        const matchesAuthor = manga.author_id === idUser; 
        return matchesCategory && matchesAuthor;
    });

    const headerTitle = role === 1 ? "Author" : role === 2 ? "Company" : "Mangas";

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex">
                <div className="flex-1 relative">
                    <div className="relative">
                        <img
                            src="/images/manga.jpg"
                            alt="Manga Banner"
                            className="w-full h-[300px] sm:h-[400px] lg:h-[644px] object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
                            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-6 sm:mb-8">
                                {headerTitle}
                            </h1>
                        </div>
                    </div>

                    <div className="-mt-12 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl relative z-10">
                        <Filters categories={categories} filter={filter} setFilter={(f) => dispatch(setFilter(f))} />

                        {isLoading && <p className="text-center">Loading mangas...</p>}
                        {error && <p className="text-center text-red-500">{error}</p>}

                        {filteredMangas.length === 0 && !isLoading && !error && (
                            <p className="text-center text-gray-500 mt-6">No hay mangas registrados en su perfil.</p>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {filteredMangas.map((manga) => {
                                const cat = categories.find((cat) => cat._id === manga.category_id);
                                const catName = cat?.name.toLowerCase() || "unknown";
                                const styles = categoryStyles[catName] || defaultStyles;

                                return (
                                    <div
                                        key={manga._id}
                                        className="relative bg-white shadow-lg rounded-lg flex items-center cursor-pointer hover:shadow-xl transition-shadow h-48"
                                        onClick={() => handleClick(manga._id)}
                                    >
                                        <span className={`absolute left-0 top-0 bottom-0 w-1 ${styles.line} rounded-l-lg`}></span>
                                        <div className="flex-1 p-4 flex flex-col justify-center pl-4">
                                            <h3 className="text-lg font-bold text-gray-800">{manga.title}</h3>
                                            <p className={`text-sm mt-1 ${styles.categoryText}`}>
                                                {cat?.name || "Unknown"}
                                            </p>
                                            <div className="flex gap-2">
                                                <button className="mt-2 px-4 py-1 bg-blue-200 text-black rounded-full text-sm hover:bg-blue-300">
                                                    EDIT
                                                </button>
                                                <button className="mt-2 px-4 py-1 bg-red-200 text-black rounded-full text-sm hover:bg-red-300">
                                                    DELETE
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-[45%] h-full">
                                            <img
                                                src={manga.cover_photo}
                                                alt={manga.title}
                                                className="object-cover w-full h-full rounded-l-full"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Manager;

