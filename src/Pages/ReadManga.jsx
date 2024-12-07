import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ReadManga() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const token = useSelector((state) => state.authStore.token);

    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id || !token) return; // Asegurarnos de tener id y token antes de la petición

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
                // Ajusta según la estructura de la respuesta de tu endpoint
                setPages(response.data.response); 
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
        <div>
            <h1>ReadManga</h1>
            {loading && <p>Loading pages...</p>}
            {error && <p>{error}</p>}
            {pages && pages.length > 0 && (
                <div>
                    {pages.map((page, index) => (
                        <img 
                            key={index} 
                            src={page} 
                            alt={`Page ${index + 1}`} 
                            className="w-full mb-4" 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
