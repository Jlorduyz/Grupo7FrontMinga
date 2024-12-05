import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setMangas } from '../Store/Store.js';

const Carousel = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const mangas = useSelector((state) => state.mangas.mangas);

  useEffect(() => {
    // Obtener las categorías
    const fetchCategories = async () => {
      const response = await fetch('https://grupo7backminga.onrender.com/api/categories/all');
      const data = await response.json();
      dispatch(setCategories(data));
    };
    fetchCategories();
  }, [dispatch]);

  useEffect(() => {
    // Obtener los mangas para cada categoría
    const fetchMangas = async () => {
      const promises = categories.map(async (category) => {
        const response = await fetch(`https://grupo7backminga.onrender.com/api/mangas/categories/${category._id}`);
        const data = await response.json();
        return { [category._id]: data };
      });
      const mangasData = await Promise.all(promises);
      const mangasObject = mangasData.reduce((acc, curr) => ({ ...acc, ...curr }), {});
      dispatch(setMangas(mangasObject));
    };
    if (categories.length > 0) {
      fetchMangas();
    }
  }, [dispatch, categories]);

  return (
    <div className="bg-pink-300 py-8">
      <div className="container mx-auto">
        {categories.map((category) => (
          <div key={category._id} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <div className="flex overflow-x-auto space-x-4">
              {mangas[category._id]?.map((manga) => (
                <div
                  key={manga._id}
                  className="flex-shrink-0 w-32 md:w-48 lg:w-64 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={manga.cover_photo}
                    alt={manga.title}
                    className="w-full h-48 md:h-64 lg:h-80 object-cover"
                  />
                  <div className="p-2 md:p-4">
                    <h3 className="text-lg font-bold truncate">{manga.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;