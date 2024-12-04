import React from "react";

const EditChapter = () => {
    return (
        <div className="min-h-screen flex flex-col sm:flex-row justify-center items-center bg-gray-100 px-4 sm:px-8">
            {/* Formulario */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg sm:mr-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Edit Chapter</h1>
                <form className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="name of the manga"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div>
                        <select
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="">select chapter</option>
                        </select>
                    </div>
                    <div>
                        <select
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="">select data</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="data to edit"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-pink-500 focus:border-pink-500"
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

            {/* Imagen (visible solo en pantallas grandes) */}
            <div className="hidden sm:flex sm:flex-col sm:items-center sm:w-1/3">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                    Chapter #1 - Discover the word
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
