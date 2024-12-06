import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Store/actions/carrouselSlice';

const Carousel = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex items-center justify-center h-96 bg-gray-100">
      <button className="text-2xl px-4">&#8592;</button>
      <div className="flex overflow-x-scroll space-x-4">
        {categories.map((category) => (
          <div
            key={category._id}
            className="w-64 bg-pink-200 rounded-lg shadow-lg flex-shrink-0"
          >
            <img
              src={category.character_photo}
              alt={category.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="text-sm">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="text-2xl px-4">&#8594;</button>
    </div>
  );
};

export default Carousel;
