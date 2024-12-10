import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMangas } from "../Store/reducers/mangaReducer";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Filters from "../Components/Filters";
import { categoryStyles, defaultStyles } from "../Components/Filters";
import { setFilter } from "../Store/actions/mangaActions";
import axios from "axios";
import MangaCard from "../Components/MangaCard";

const Mangas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <Filters categories={categories} filter={filter} setFilter={(f) => dispatch(setFilter(f))} />

            {isLoading && <p className="text-center">Loading mangas... <img className="flex items-center justify-center" src="https://giffiles.alphacoders.com/170/170278.gif" alt="Loading" /></p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {filteredMangas.length === 0 && !isLoading && !error && (
              <div className="text-center bg-gray-100 py-8 px-4 rounded-lg shadow-md border border-gray-200">
                <p className="text-pink-600 text-2xl font-bold mb-4">Manga not found</p>
                <p className="text-gray-500 text-lg mb-6">
                  Sorry, we couldnt find any manga matching your search criteria.
                </p>
                <img
                  className="mx-auto mt-4 w-48 h-48 object-contain"
                  src="https://c.tenor.com/_VjgyzCjP_EAAAAd/tenor.gif"
                  alt="Not Found"
                />
                <button
                  onClick={() => setSearchText("")} // Limpia el campo de búsqueda
                  className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  Reset Search
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredMangas.map((manga) => (
                <MangaCard
                  key={manga._id}
                  manga={manga}
                  categories={categories}
                  onClick={handleClick}
                />
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
