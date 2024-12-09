// src/Components/MangaCard.jsx
import React from "react";
import { categoryStyles, defaultStyles } from "./Filters";

const MangaCard = ({ manga, categories, onClick }) => {
    const cat = categories.find((cat) => cat._id === manga.category_id);
    const catName = cat?.name.toLowerCase() || 'unknown';
    const styles = categoryStyles[catName] || defaultStyles;

    return (
        <div
            className="relative bg-white shadow-lg rounded-lg flex items-center cursor-pointer hover:shadow-xl transition-shadow h-48"
            onClick={() => onClick(manga._id)}
        >
            {/* Línea de Categoría */}
            <span className={`absolute left-0 top-0 bottom-0 w-1 ${styles.line} rounded-l-lg`}></span>
            
            {/* Contenido de la Tarjeta */}
            <div className="flex-1 p-4 flex flex-col justify-center pl-4">
                <h3 className="text-lg font-bold text-gray-800">{manga.title}</h3>
                <p className={`text-sm mt-1 ${styles.categoryText}`}>
                    {cat?.name || "Unknown"}
                </p>
                <button className="mt-2 px-4 py-1 bg-green-200 text-black rounded-full text-sm hover:bg-green-300">
                    Read
                </button>
            </div>
            
            {/* Imagen de la Manga */}
            <div className="w-[45%] h-full">
                <img
                    src={manga.cover_photo}
                    alt={manga.title}
                    className="object-cover w-full h-full rounded-l-full"
                />
            </div>
        </div>
    );
};

export default MangaCard;
