import React from "react";

export const categoryStyles = {
  comics: {
    button: 'bg-pink-200 text-pink-800 hover:bg-pink-300', 
    selectedButton: 'bg-pink-500 text-white',
    categoryText: 'text-pink-500',
    line: 'bg-pink-500'
  },
  shojo: {
    button: 'bg-rose-200 text-rose-800 hover:bg-rose-300', 
    selectedButton: 'bg-rose-500 text-white',
    categoryText: 'text-rose-500',
    line: 'bg-rose-500'
  },
  seinen: {
    button: 'bg-green-200 text-green-800 hover:bg-green-300',
    selectedButton: 'bg-green-500 text-white',
    categoryText: 'text-green-500',
    line: 'bg-green-500'
  },
  shonen: {
    button: 'bg-purple-200 text-purple-800 hover:bg-purple-300',
    selectedButton: 'bg-purple-500 text-white',
    categoryText: 'text-purple-500',
    line: 'bg-purple-500'
  }
};

export const defaultStyles = {
  button: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  selectedButton: 'bg-gray-400 text-white',
  categoryText: 'text-gray-500',
  line: 'bg-gray-500'
};

const Filters = ({ categories, filter, setFilter }) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start items-center mb-6 space-x-2">
      <button
        className={`px-3 py-2 rounded-full text-xs sm:text-sm lg:text-base transition-colors ${
          filter === "All"
            ? "bg-pink-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      {categories.map((type, index) => {
        const catName = type.name.toLowerCase();
        const styles = categoryStyles[catName] || defaultStyles;
        const isSelected = filter === type._id;
        return (
          <button
            key={index}
            className={`px-3 py-2 rounded-full text-xs sm:text-sm lg:text-base transition-colors ${
              isSelected ? styles.selectedButton : styles.button
            }`}
            onClick={() => setFilter(type._id)}
          >
            {type.name}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
