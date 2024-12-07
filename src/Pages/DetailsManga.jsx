import React, { useEffect, useState } from "react";
import axios from "axios";
import Chapters from "../Components/Chapters";

const DetailsManga = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const [manga, setManga] = useState(null);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/mangas/id/${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setManga(response.data.response[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (!manga) {
        return (
            <div className="bg-gray-100 h-screen flex items-center justify-center">
                <p className="text-gray-600">Loading...</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-4 px-2">
            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden mt-10 sm:w-[90%] lg:max-w-4xl">
                <div className="relative flex items-center justify-center sm:h-auto lg:h-[600px] bg-gray-50">
                    <img
                        src={manga.cover_photo}
                        alt={manga.title}
                        className="w-full h-auto object-contain
                       sm:max-h-[400px] 
                       lg:max-w-[600px] lg:max-h-full lg:mx-auto"
                    />
                    <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {manga.category || 'Category'}
                    </div>
                </div>

                <div className="p-4 flex flex-col  lg:items-center md:items-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2 w-full">
                        {manga.title}
                    </h1>

                    <div className="flex justify-around mb-4 lg:hidden  md:w-[70%]">
                        <div className="bg-white shadow-md p-2 rounded-full">
                            <span className="text-2xl">👍</span>
                        </div>
                        <div className="bg-white shadow-md p-2 rounded-full">
                            <span className="text-2xl">👎</span>
                        </div>
                        <div className="bg-white shadow-md p-2 rounded-full">
                            <span className="text-2xl">😮</span>
                        </div>
                        <div className="bg-white shadow-md p-2 rounded-full">
                            <span className="text-2xl">😍</span>
                        </div>
                    </div>
                    <div className=" justify-around mb-4 hidden lg:flex  w-[70%]">
                        <div className="bg-white shadow-md p-2 rounded-full">
                            <span className="text-2xl">👍</span>
                        </div>
                        <div className="bg-white shadow-md p-2 rounded-full">
                            <span className="text-2xl">👎</span>
                        </div>
                        <div className="bg-white shadow-md p-2 rounded-full">
                            <span className="text-2xl">😮</span>
                        </div>
                        <div className="bg-white shadow-md p-2 rounded-full">
                            <span className="text-2xl">😍</span>
                        </div>
                    </div>

                    <div className="flex justify-around items-center mb-4 lg:w-full md:w-full">
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-lg">{manga.rating || '4.5/5'}</p>
                            <span className="text-sm text-gray-500">Rating</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-lg">{manga.chapters_count || '265'}</p>
                            <span className="text-sm text-gray-500">Chapters</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-lg">{manga.language || 'Eng'}</p>
                            <span className="text-sm text-gray-500">Language</span>
                        </div>
                    </div>
                </div>

                <Chapters manga={manga} />
            </div>
        </div>
    );
};

export default DetailsManga;
