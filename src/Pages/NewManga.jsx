import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createManga } from "../Store/actions/newMangaActions";
import { useNavigate } from "react-router-dom";

const CreateManga = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useSelector((state) => state.newManga);

    const [formData, setFormData] = useState({
        title: "",
        cover_photo: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || !formData.cover_photo || !formData.description) {
            alert("Please complete all fields.");
            return;
        }

        try {
            await dispatch(createManga(formData));
            alert("Manga created successfully.");
            navigate("/manager");
        } catch (err) {
            console.error("Error creating manga:", err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col sm:flex-row justify-center items-center bg-gray-100 px-4 sm:px-8">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg sm:mr-8">
                <h1 className="text-2xl sm:text-3xl text-gray-800 mb-6 text-center">
                    Create Manga
                </h1>
                {isLoading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter manga title"
                            className="w-full px-4 py-3 border-b border-black text-sm focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700 mb-1">
                            Cover Photo URL
                        </label>
                        <input
                            type="text"
                            id="cover_photo"
                            name="cover_photo"
                            value={formData.cover_photo}
                            onChange={handleChange}
                            placeholder="Enter cover photo URL"
                            className="w-full px-4 py-3 border-b border-black text-sm focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter manga description"
                            className="w-full px-4 py-3 border-b border-black text-sm focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-green-400 text-white py-3 rounded-full font-semibold hover:bg-green-500 transition"
                        >
                            Create Manga
                        </button>
                    </div>
                </form>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-center sm:w-1/3">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                    {formData.title || "Manga Title"}
                </h2>
                <img
                    src={formData.cover_photo || "https://via.placeholder.com/300"}
                    alt="Manga Cover"
                    className="w-full max-w-md h-auto mb-4"
                />
                <p className="text-sm text-gray-600">{formData.description || "Manga description will appear here."}</p>
            </div>
        </div>
    );
};

export default CreateManga;
