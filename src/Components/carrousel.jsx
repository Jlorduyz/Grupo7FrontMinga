import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Store/actions/carrouselSlice';

const Carousel = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleNext = () => {
    if (categories.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }
  };

  const handlePrev = () => {
    if (categories.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
    }
  };

  useEffect(() => {
    if (categories.length > 0) {
      const intervalId = setInterval(() => {
        handleNext();
      }, 10000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [categories, currentIndex]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (categories.length === 0) return <div>No categories available</div>;

  const currentCategory = categories[currentIndex];

  return (
    <div className="w-[100%] mx-auto mt-16 sm:block hidden text-white">
      <div className="relative w-full flex items-center justify-center rounded-lg overflow-hidden h-auto md:h-96 p-4 md:p-0">
        <div className="flex items-center justify-center w-full md:px-8">
          <div className="flex flex-col md:flex-row items-center bg-pink-400 rounded-lg shadow-lg relative w-full md:h-64 p-4 md:px-8 justify-around">

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow hover:bg-gray-200"
            >
              &#8592;
            </button>

            <div className="flex flex-col md:flex-row w-full md:w-2/4 items-center justify-around space-y-4 md:space-y-0 md:space-x-4">
              <img
                src={currentCategory.character_photo}
                alt={currentCategory.name}
                className="object-cover rounded-lg md:relative md:-top-8 h-40 md:h-64 lg:h-64"
              />
              <img
                src={currentCategory.cover_photo}
                alt={currentCategory.name}
                className="object-cover rounded-lg md:relative md:-top-8 shadow-lg h-40 md:h-56 lg:h-64"
              />
            </div>

            <div className="w-full md:w-2/4 h-full flex flex-col justify-center mt-4 md:mt-0 md:ml-32 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentCategory.name}</h3>
              <p className="text-sm md:text-base max-w-sm mx-auto md:mx-0">{currentCategory.description}</p>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow hover:bg-gray-200"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
