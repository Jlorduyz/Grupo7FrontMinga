import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMangas } from "../Store/reducers/mangaReducer";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Filters from "../Components/Filters"; 
import { categoryStyles, defaultStyles } from "../Components/Filters";
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

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex">
        <div className="flex-1 relative">
          {/* Banner */}
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

          {/* Filtros reutilizables */}
          <div className="-mt-12 mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-2xl lg:max-w-7xl relative z-10">
            <Filters categories={categories} filter={filter} setFilter={(f) => dispatch(setFilter(f))} />

            {isLoading && <p className="text-center">Loading mangas...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredMangas.map((manga) => {
                const cat = categories.find((cat) => cat._id === manga.category_id);
                const catName = cat?.name.toLowerCase() || 'unknown';
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

export default Mangas;
