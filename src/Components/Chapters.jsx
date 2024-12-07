import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Chapters() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const [manga, setManga] = useState(null);
    const [infoOrChapters, setInfoOrChapters] = useState(false);
    const [chapters, setChapters] = useState([]);

    const token = useSelector((state) => state.authStore.token);

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
            console.log(response.data.response);

        } catch (error) {
            console.log("Error fetching chapters:", error);
        }
    };

    const handleChaptersfalse = () => {
        setInfoOrChapters(false);
    };
    const NavigatePage = useNavigate();
    const handleToRead = (_id) => {
        NavigatePage(`/readManga?id=${_id}`);
    }

    return (
        <div className="border-2 border-blue-500 h-screen w-auto">
            <div className="border-2 border-green-500 w-full flex">
                <div className="border-2 border-yellow-400 w-1/2 text-center">
                    <button onClick={handleChaptersfalse}>Mangas</button>
                </div>
                <div className="border-2 border-blue-500 w-1/2 text-center">
                    <button onClick={handleChapters}>Chapters</button>
                </div>
            </div>
            <div className="border-2 border-pink-500 ">
                {
                    manga && !infoOrChapters ? (
                        <div className="text-center">
                            <h1>{manga.description}</h1>
                        </div>
                    ) : infoOrChapters ? (
                        <div className="text-center h-auto flex flex-wrap">
                            <h1>Chapters</h1>
                            {chapters && chapters.length > 0 ? (
                                <ul className="border-2 flex flex-wrap">
                                    {chapters.map(chapter => (

                                        <div className="border-2 border-black w-1/4 h-auto flex flex-wrap">
                                            <div className="w-auto h-auto">
                                                <img className="w-full h-full object-cover" src={chapter.cover_photo} alt={chapter.title} />
                                            </div>
                                            <button className=" hover:bg-pink-600 text-center"
                                                onClick={() => handleToRead(chapter._id)}>
                                                {chapter.title}
                                            </button>
                                        </div>
                                    ))}
                                </ul>
                            ) : (
                                <p>No chapters available</p>
                            )}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </div>
        </div>
    );
}
