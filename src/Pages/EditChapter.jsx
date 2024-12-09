import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setSelectedChapter,
    setEditData,
    fetchMangas,
    fetchChapters,
    updateChapter,
    deleteChapter
} from "../Store/actions/editChapterActions"; 
import { useNavigate, useLocation } from "react-router-dom";

const EditChapter = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const mangaId = queryParams.get('id');

    const { 
        mangaList, 
        selectedManga, 
        chapterList, 
        selectedChapter, 
        editData,
        isLoading,
        error
    } = useSelector((state) => state.editChapter);

    const [selectedVariable, setSelectedVariable] = useState("");

    useEffect(() => {
        dispatch(fetchMangas());
    }, [dispatch]);

    useEffect(() => {
        if (mangaId && mangaList.length > 0) {
            const currentManga = mangaList.find(manga => manga._id === mangaId);
            if (currentManga) {
                dispatch({ type: "editChapter/setSelectedManga", payload: currentManga });
            } else {
                navigate("/manager");
            }
        }
    }, [mangaId, mangaList, dispatch, navigate]);

    useEffect(() => {
        if (selectedManga) {
            dispatch(fetchChapters(selectedManga._id));
        }
    }, [selectedManga, dispatch]);

    const handleChapterSelect = (e) => {
        const chapterId = e.target.value;
        dispatch(setSelectedChapter(chapterId));
        setSelectedVariable("");
        dispatch(setEditData(""));
    };

    const getChapterVariables = () => {
        const chapter = chapterList.find(ch => ch._id === selectedChapter);
        if (chapter) {
            return [
                { name: "Title", key: "title" },
                { name: "Photo", key: "cover_photo" },
            ];
        }
        return [];
    };

    const handleVariableSelect = (e) => {
        const variable = e.target.value;
        setSelectedVariable(variable);
        const chapter = chapterList.find(ch => ch._id === selectedChapter);
        if (chapter && variable) {
            dispatch(setEditData(chapter[variable] || ""));
        } else {
            dispatch(setEditData(""));
        }
    };

    const handleEditChange = (e) => {
        dispatch(setEditData(e.target.value));
    };
    
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        if (!selectedChapter || !selectedVariable || !editData) {
            alert("Por favor, selecciona un capítulo, una variable y proporciona el nuevo dato.");
            return;
        }
        try {
            await dispatch(updateChapter(selectedChapter, selectedVariable, editData));
            alert("Capítulo actualizado exitosamente.");
            navigate("/manager");
        } catch (err) {
            console.error("Error updating chapter:", err);
            if (err.response && err.response.data && err.response.data.message) {
                alert(`Error: ${err.response.data.message}`);
            } else {    
                useNavigate("/manager");
            }
        }
    };

    const handleDelete = async () => {
        if (!selectedChapter) {
            alert("Por favor, selecciona un capítulo para eliminar.");
            return;
        }
        if (window.confirm("¿Estás seguro de que deseas eliminar este capítulo?")) {
            try {
                await dispatch(deleteChapter(selectedChapter));
                alert("Capítulo eliminado exitosamente.");
                navigate("/manager");
            } catch (err) {
                console.error("Error deleting chapter:", err);
                if (err.response && err.response.data && err.response.data.message) {
                    alert(`Error: ${err.response.data.message}`);
                } else {
                    alert("Hubo un error al eliminar el capítulo.");
                }
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col sm:flex-row justify-center items-center bg-gray-100 px-4 sm:px-8">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg sm:mr-8">
                <h1 className="text-2xl sm:text-3xl text-gray-800 mb-6 text-center">Edit Chapter</h1>
                {isLoading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!isLoading && !error && selectedManga && (
                    <form onSubmit={handleEditSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Selected Manga
                            </label>
                            <p className="w-full px-4 py-3 border-b border-black text-sm focus:ring-pink-500 focus:border-pink-500">
                                {selectedManga.title}
                            </p>
                        </div>

                        <div>
                            <label htmlFor="chapter-select" className="block text-sm font-medium text-gray-700 mb-1">
                                Select Chapter
                            </label>
                            <select
                                id="chapter-select"
                                value={selectedChapter || ""}
                                onChange={handleChapterSelect}
                                className="w-full px-4 py-3 border-b border-black text-sm focus:ring-pink-500 focus:border-pink-500"
                            >
                                <option value="">selec chapter</option>
                                {chapterList.map((chapter) => (
                                    <option key={chapter._id} value={chapter._id}>
                                        {chapter.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="variable-select" className="block text-sm font-medium text-gray-700 mb-1">
                                Select Variable
                            </label>
                            <select
                                id="variable-select"
                                value={selectedVariable || ""}
                                onChange={handleVariableSelect}
                                className="w-full px-4 py-3 border-b border-black text-sm focus:ring-pink-500 focus:border-pink-500"
                            >
                                <option value="">select data</option>
                                {getChapterVariables().map((variable) => (
                                    <option key={variable.key} value={variable.key}>
                                        {variable.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="edit-input" className="block text-sm font-medium text-gray-700 mb-1">
                                New {getChapterVariables().find(v => v.key === selectedVariable)?.name || "Data"}
                            </label>
                            <input
                                type="text"
                                id="edit-input"
                                value={editData}
                                onChange={handleEditChange}
                                placeholder={` new ${getChapterVariables().find(v => v.key === selectedVariable)?.name || "data"}`}
                                className="w-full px-4 py-3 border-b border-black text-sm focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-400 text-white py-3 rounded-full font-semibold hover:bg-green-500 transition"
                            >
                                Edit
                            </button>
                        </div>

                        {selectedChapter && (
                            <div>
                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    className="w-full bg-red-100 text-red-500 py-3 rounded-full font-semibold hover:bg-red-200 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </form>
                )}
            </div>

            <div className="hidden sm:flex sm:flex-col sm:items-center sm:w-1/3">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                    {selectedManga ? selectedManga.title : "Select a manga"}
                </h2>
                <img
                    src={selectedManga ? selectedManga.cover_photo : ""}
                    alt="Chapter Cover"
                    className="w-full max-w-md h-auto"
                />
            </div>
        </div>
    );
};

export default EditChapter;
