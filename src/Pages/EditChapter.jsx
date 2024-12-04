import React from "react";

const EditChapter = () => {
    return (
        <div className="min-h-screen flex justify-between items-start bg-gray-100 p-8">
            {/* Menú hamburguesa y logo */}
            <div className="absolute top-6 left-6 flex justify-between w-full px-8">
                <img
                    src="/images/MenuImage.png"
                    alt="Menu"
                    className="w-[57px] h-[55px]"
                />
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="w-[88px] h-[88px]"
                />
            </div>

            {/* Formulario */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Chapter</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name of the manga
                        </label>
                        <input
                            type="text"
                            placeholder="name of the manga"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Select chapter
                        </label>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="">Select chapter</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Select data
                        </label>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="">Select data</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Data to edit
                        </label>
                        <input
                            type="text"
                            placeholder="data to edit"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div className="space-y-4">
                        <button
                            type="button"
                            className="w-full bg-green-400 text-white py-3 rounded-full font-semibold hover:bg-green-500 transition"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="w-full bg-red-100 text-red-500 py-3 rounded-full font-semibold hover:bg-red-200 transition"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>

            {/* Imagen */}
            <div className="w-1/2 ml-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Chapter #1 - Discover the word
                </h2>
                <img
                    src="/images/chapter.png"
                    alt="Chapter Cover"
                    className="rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default EditChapter;
