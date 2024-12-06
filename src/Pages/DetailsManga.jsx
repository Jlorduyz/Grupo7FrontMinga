import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailsManga = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const [manga, setManga] = useState(null);
    const [infoOrChapters, setInfoOrChapters] = useState(false);

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


    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
                {manga ? (
                    <>
                        <div className="relative">
                            <img
                                src={manga.cover_photo} 
                                className="w-full h-[300px] object-cover"
                                alt={manga.title}
                            />
                            <div className="absolute top-4 left-4 bg-pink-500 text-white px-4 py-1 rounded-full">
                                {manga.category}
                            </div>
                        </div>
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-gray-800">{manga.title}</h1>
                            <p className="text-sm text-gray-500 mt-2">{manga.description}</p>
                        </div>
                    </>
                    
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default DetailsManga;
