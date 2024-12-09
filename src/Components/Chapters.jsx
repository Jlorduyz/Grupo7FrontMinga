import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Chapters({ manga }) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const [infoOrChapters, setInfoOrChapters] = useState(false);
    const [chapters, setChapters] = useState([]);
    const token = useSelector((state) => state.authStore.token);
    const navigate = useNavigate();


    const handleChapters = async () => {
        setInfoOrChapters(true);
        try {
            const config = {
                method: 'get',
                url: `http://localhost:8080/api/chapters/manga/id/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.request(config);
            setChapters(response.data.response);
        } catch (error) {
            console.log("Error fetching chapters:", error);
        }
    };

    const handleManga = () => {
        setInfoOrChapters(false);
    };

    const handleToRead = (_id) => {
        navigate(`/readManga?id=${_id}`);
    };

    return (
        <div className="px-4 pb-4">
            <div className="flex justify-center items-center mb-4 bg-gray-200 rounded-full p-1 w-full sm:w-2/3 mx-auto">
                <button
                    onClick={handleManga}
                    className={`flex-1 text-center py-2 rounded-full text-sm font-semibold transition-colors ${!infoOrChapters ? 'bg-pink-500 text-white' : 'text-gray-700'
                        }`}
                >
                    Manga
                </button>
                <button
                    onClick={handleChapters}
                    className={`flex-1 text-center py-2 rounded-full text-sm font-semibold transition-colors ${infoOrChapters ? 'bg-pink-500 text-white' : 'text-gray-700'
                        }`}
                >
                    Chapters
                </button>
            </div>

            {!infoOrChapters ? (
                <div className="text-center text-gray-700 px-2">
                    <p className="text-sm sm:text-base leading-relaxed">{manga.description}</p>
                </div>
            ) : (
                <div className="flex flex-col space-y-4 mt-4">
                    {chapters && chapters.length > 0 ? (
                        chapters.map((chapter) => (
                            <div
                                key={chapter._id}
                                className="flex items-center justify-between bg-white shadow-md rounded-lg p-2  h-[100px]"
                            >
                                <div className="flex items-center space-x-3  w-[65%] h-full ">
                                    <img
                                        className="w-[50%] h-full object-cover rounded-s-md"
                                        src={chapter.cover_photo}
                                        alt={chapter.title}
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="font-semibold text-gray-800">{chapter.title}</h2>
                                        <p className="text-sm text-gray-500">Pages: {chapter.pages.length || 'N/A'}</p>
                                    </div>
                                </div>
                                <div className=" h-full w-[35%] flex justify-center items-center  sm:hidden"> 
                                    <button
                                        className="bg-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-600 text-xl font-semibold  w-[90%] h-[80%]"
                                        onClick={() => handleToRead(chapter._id)}
                                    >
                                        Read
                                    </button>
                                </div>
                                <div className=" h-full w-[35%] md:flex justify-center items-center sm:block hidden"> 
                                    <button
                                        className="bg-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-600 text-2xl font-semibold  w-[90%] h-[90%]"
                                        onClick={() => handleToRead(chapter._id)}
                                    >
                                        Read
                                    </button>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No chapters available</p>
                    )}
                </div>
            )}
        </div>
    );
}
