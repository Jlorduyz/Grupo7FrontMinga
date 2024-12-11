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
    const [currentPage, setCurrentPage] = useState(0);

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

    const goToNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col relative">

            <div
                style={{ height: '100px' }}
                className="fixed top-0 left-0 w-full z-10 bg-pink-500 text-white flex items-center justify-center px-4 shadow-md"
            >
                <h1 className="font-semibold">Chapter {info[0] ? info[0].title : ''}</h1>
            </div>




            <div className="flex-1 flex items-center justify-center pt-1 pb-20 relative">

                {loading && <p className="text-gray-600">Loading pages...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {pages && pages.length > 0 && !loading && !error && window.innerWidth < 800 && (


                    <div className="relative w-full max-w-screen-lg ">
                        <div className=" bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold border-2 mt-32 w-[100px] items-center  justify-center flex">
                            <button onClick={() => navigate(-1)}>
                                Return
                            </button>
                        </div>
                        <img
                            src={pages[currentPage]}
                            alt={`Page ${currentPage + 1}`}
                            className="w-full h-auto object-contain shadow-lg rounded"
                        />

                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 0}
                            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded opacity-70 hover:opacity-100 ${currentPage === 0 ? 'hidden' : 'block'}`}
                        >
                            &#8592;
                        </button>
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === pages.length - 1}
                            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded opacity-70 hover:opacity-100 ${currentPage === pages.length - 1 ? 'hidden' : 'block'}`}
                        >
                            &#8594;
                        </button>

                        <span className="absolute bottom-4 right-4 text-gray-700">
                            Page {currentPage + 1} of {pages.length}
                        </span>
                    </div>
                )}
                {pages && pages.length > 0 && !loading && !error && window.innerWidth > 800 && (


                    <div className="relative w-full max-w-screen-lg ">
                        <div className=" bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold border-2 mt-32 w-[100px] items-center  justify-center flex">
                            <button onClick={() => navigate(-1)}>
                                Return
                            </button>
                        </div>
                        <img
                            src={pages[currentPage]}
                            alt={`Page ${currentPage + 1}`}
                            className="w-full h-auto object-contain shadow-lg rounded"
                        />

                        <span className="absolute bottom-4 right-4 text-gray-700">
                            Page {currentPage + 1} of {pages.length}
                        </span>
                    </div>
                )}

                <div className="border-2 border-blue-500">
                    <button
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-pink-500 text-pink-500 rounded-full px-6 py-3 shadow hover:bg-gray-100"

                        onClick={() => {/**/ }}
                    >
                        Messages

                    </button>
                    {pages && pages.length > 0 && !loading && !error && window.innerWidth > 800 && (


                        <div className="flex items-center justify-center w-full h-full">
                            <button
                                onClick={goToPreviousPage}
                                disabled={currentPage === 0}
                                className={` absolute bottom-4 left-1/3 transform -translate-x-1/2 bg-pink-500 text-white px-3 py-1 rounded opacity-70 hover:opacity-100 ${currentPage === 0 ? 'hidden' : 'block'}`}
                            >
                                &#8592;
                            </button>
                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === pages.length - 1}
                                className={`absolute bottom-4 right-1/3 transform -translate-x-1/2  bg-pink-500 text-white px-3 py-1 rounded opacity-70 hover:opacity-100 ${currentPage === pages.length - 1 ? 'hidden' : 'block'}`}
                            >
                                &#8594;
                            </button>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}
