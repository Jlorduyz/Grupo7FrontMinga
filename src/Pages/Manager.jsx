import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../Store/actions/managerActions"; 
import { deleteManga } from "../Store/actions/mangaActions";
import { fetchMangas } from "../Store/reducers/mangaReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer/Footer";
import Filters from "../Components/Filters"; 
import { categoryStyles, defaultStyles } from "../Components/Filters";

const Manager = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { mangas, filter, isLoading, error } = useSelector((state) => state?.mangas);
    const idUser = useSelector((state) => state.authStore.user?._id); 
    const role = useSelector((state) => state.authStore.user?.role); 
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

    useEffect(() => {
        if (!idUser) {
            navigate("/"); 
        }
    }, [idUser, navigate]);

    const handleClick = (id) => {
        navigate(`/detailManga?id=${id}`);
    };

    const handleEdit = (id) => {
        navigate(`/edit-chapter?id=${id}`);
    };

    const handleNewChapter = (id) => {
        navigate(`/new-chapter?id=${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("¿Are you sure you want to delete this manga?")) {
            dispatch(deleteManga(id));
        }
    };
    console.log(mangas);
    
    const filteredMangas = mangas.filter((manga) => {
        const matchesCategory = filter === "All" || manga.category_id === filter;
        const matchesAuthor = manga.author_id === idUser; 
        const matchesSearch = manga.title.toLowerCase().includes(searchText.toLowerCase());
        return matchesCategory && matchesAuthor && matchesSearch;
    });
    console.log(filteredMangas);
    

    const headerTitle = role === 1 ? "Author" : role === 2 ? "Company" : role === 3 ? "Admin" : "Mangas";

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
                            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
                                <input
                                    type="text"
                                    placeholder="Search mangas..."
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    className="w-full h-10 sm:h-12 lg:h-[57px] px-4 border border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="-mt-12 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl relative z-10">
                        <Filters categories={categories} filter={filter} setFilter={(f) => dispatch(setFilter(f))} />

                        {isLoading && <p className="text-center">Loading mangas... <img className="flex items-center justify-center" src="https://giffiles.alphacoders.com/170/170278.gif" alt="Loading" /></p>}
                        {error && <p className="text-center text-red-500">{error}</p>}

                        {filteredMangas.length === 0 && !isLoading && !error && (
                            <p className="text-center text-gray-500 mt-6">No mangas found.</p>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {filteredMangas.map((manga) => {
                                const cat = categories.find((cat) => cat._id === manga?.category_id);
                                const catName = cat?.name.toLowerCase() || "unknown";
                                const styles = categoryStyles[catName] || defaultStyles;

                                return (
                                    <div
    key={manga._id}
    className="relative bg-white shadow-lg rounded-lg flex items-center hover:shadow-xl transition-shadow h-48"
>
    <span className={`absolute left-0 top-0 bottom-0 w-1 ${styles.line} rounded-l-lg`}></span>
    <div className="flex-1 p-4 flex flex-col justify-center pl-4">
        <div className="absolute top-2 left-2 ml-3">
            <button onClick={(e) => { 
                    e.stopPropagation(); 
                    handleNewChapter(manga._id);
                }}
        className=" rounded-full mr-1">
            <img className="w-[20px]" src="https://www.svgrepo.com/show/379562/plus-circle.svg" alt="plus" />
        </button>
        <button onClick={(e) => { 
                    e.stopPropagation(); 
                    handleEdit(manga._id);
                }}
        className=" rounded-full">
            <img className="w-[20px]" src="https://www.svgrepo.com/show/379366/edit-circle.svg" alt="plus" />
        </button>
            </div>
        <h3 className="text-lg font-bold text-gray-800">{manga.title}</h3>
        <p className={`text-sm mt-1 ${styles.categoryText}`}>
            {cat?.name || "Unknown"}
        </p>
        <div className="flex gap-2 mt-2">
            <button
                className="px-4 py-1 bg-blue-200 text-black rounded-full text-sm hover:bg-blue-300"
                onClick={(e) => { 
                    e.stopPropagation(); 
                    handleEdit(manga._id);
                }}
            >
                EDIT
            </button>
            <button
                className="px-4 py-1 bg-red-200 text-black rounded-full text-sm hover:bg-red-300"
                onClick={(e) => { 
                    e.stopPropagation(); 
                    handleDelete(manga._id);
                }}
            >
                DELETE
            </button>
        </div>
    </div>
    
    <div className="w-[45%] h-full">
        <img
            src={manga.cover_photo}
            alt={manga.title}
            className="object-cover w-full h-full rounded-l-full hover:w-[90%] hover:h-[90%] transition-all active:h-[110%] active:w-[110%]"
            onClick={() => handleClick(manga._id)}
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
