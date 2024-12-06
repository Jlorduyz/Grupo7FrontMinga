import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailsManga = () => {
    const { id } = useParams();
    const manga = useSelector((state) => state.detailsManga.manga); // Obtén los detalles del store

    if (!manga) {
        return <p className="text-center text-gray-500">No manga selected.</p>;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                    <img
                        src={manga.image}
                        alt={manga.title}
                        className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-pink-500 text-white px-4 py-1 rounded-full">
                        {manga.type}
                    </div>
                </div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800">{manga.title}</h1>
                    <p className="text-sm text-gray-500 mt-2">{manga.description || "No description available."}</p>
                </div>
            </div>
            
        </div>
    );
};

export default DetailsManga;
