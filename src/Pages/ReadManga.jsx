import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ReadManga() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const token = useSelector((state) => state.authStore.token);

    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        if (!id || !token) return;

        const fetchChapterPages = async () => {
            try {
                const config = {
                    method: 'get',
                    url: `http://localhost:8080/api/chapters/id/${id}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const response = await axios.request(config);
                setPages(response.data.response[0].pages);
                setInfo(response.data.response);

                setError(null);

            } catch (err) {
                console.error("Error fetching chapter pages:", err);
                setError("Failed to load chapter pages.");
            } finally {
                setLoading(false);
            }
        };

        fetchChapterPages();
    }, [id, token]);
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col relative">
            <div className=" top-0 left-0 w-full z-10 bg-pink-500 text-white flex items-center justify-center py-4 px-4 shadow-md ">
                <h1 className="font-semibold">Capítulo {info[0] ? info[0].title : ''}</h1>
                <div className="w-8 h-8"></div>
            </div>
            <div className=" h-20  items-end  hidden lg:flex mt-5">
                <button
                    className="text-black font-medium hover:opacity-90  h-[90%] w-[10%] rounded-full bg-gray-300 shadow-md hover:bg-gray-400 active:bg-gray-500"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
            <div className=" h-20 flex items-end lg:hidden mt-5">
                <button
                    className="text-black font-medium hover:opacity-90  h-[90%] w-[20%] rounded-full bg-gray-300 shadow-md hover:bg-gray-400 active:bg-gray-500"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>


            <div className="flex-1 overflow-auto pt-16 pb-20 flex flex-col items-center">
                {loading && (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-600">Loading pages...</p>
                    </div>
                )}
                {error && (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-red-500">{error}</p>
                    </div>
                )}

                {pages && pages.length > 0 && (
                    <div className="flex flex-col items-center space-y-6 w-full">
                        {pages.map((page, index) => (
                            <img
                                key={index}
                                src={page || "LOADING.."}
                                alt={`Page ${index + 1}`}
                                className="w-full max-w-screen-md h-auto object-contain"
                            />
                        ))}
                    </div>
                )}
            </div>

            <button
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 text-pink-500 rounded-full px-4 py-2 shadow hover:bg-gray-100"
                onClick={() => { }}
            >
                Messages
            </button>
        </div>
    );
}
