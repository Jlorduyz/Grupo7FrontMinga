import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setMangaList,
    setSelectedManga,
    setChapterList,
    setSelectedChapter,
    setEditData,
} from "../Store/actions/editChapterActions";

const EditChapter = () => {
    const dispatch = useDispatch();
    const { mangaList, selectedManga, chapterList, selectedChapter, editData } =
        useSelector((state) => state.editChapter);

    // Simula la carga inicial de datos
    useEffect(() => {
        const fetchMangaData = async () => {
            const mangas = [
                "Naruto",
                "Attack on Titan",
                "Sailor Moon",
                "Dragon Ball",
            ];
            dispatch(setMangaList(mangas)); // Carga la lista de mangas
        };
        fetchMangaData();
    }, [dispatch]);

    // Actualiza la lista de capítulos según el manga seleccionado
    useEffect(() => {
        if (selectedManga) {
            const chapters = ["Chapter 1", "Chapter 2", "Chapter 3"];
            dispatch(setChapterList(chapters)); // Carga capítulos dinámicamente
        }
    }, [selectedManga, dispatch]);

    return (
        <div className="min-h-screen flex flex-col sm:flex-row justify-center items-center bg-gray-100 px-4 sm:px-8">
            {/* Formulario */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg sm:mr-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Edit Chapter</h1>
                <form className="space-y-6">
                    <div>
                        <select
                            value={selectedManga || ""}
                            onChange={(e) => dispatch(setSelectedManga(e.target.value))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="">Select manga</option>
                            {mangaList.map((manga) => (
                                <option key={manga} value={manga}>
                                    {manga}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select
                            value={selectedChapter || ""}
                            onChange={(e) => dispatch(setSelectedChapter(e.target.value))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="">Select chapter</option>
                            {chapterList.map((chapter) => (
                                <option key={chapter} value={chapter}>
                                    {chapter}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={editData}
                            onChange={(e) => dispatch(setEditData(e.target.value))}
                            placeholder="Data to edit"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div className="space-y-4">
                        <button
                            type="button"
                            onClick={() => alert(`Edited: ${editData}`)}
                            className="w-full bg-green-400 text-white py-3 rounded-full font-semibold hover:bg-green-500 transition"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            onClick={() => alert("Deleted")}
                            className="w-full bg-red-100 text-red-500 py-3 rounded-full font-semibold hover:bg-red-200 transition"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>

            {/* Imagen (visible solo en pantallas grandes) */}
            <div className="hidden sm:flex sm:flex-col sm:items-center sm:w-1/3">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                    Chapter #{selectedChapter || "N/A"} - {selectedManga || "Select a manga"}
                </h2>
                <img
                    src="/images/chapter.png"
                    alt="Chapter Cover"
                    className="w-full max-w-md h-auto"
                />
            </div>
        </div>
    );
};

export default EditChapter;
