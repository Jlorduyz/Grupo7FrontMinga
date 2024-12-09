import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { createChapter } from "../Store/actions/editChapterActions";

const NewChapter = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const mangaId = location.state?.manga_id || new URLSearchParams(location.search).get("manga_id") || "";

  const [formData, setFormData] = useState({
    title: "",
    order: "",
    pages: [],
    manga_id: mangaId, 
  });

  const [pageInput, setPageInput] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPage = () => {
    if (pageInput.trim()) {
      setFormData({
        ...formData,
        pages: [...formData.pages, pageInput],
      });
      setPageInput("");
    }
  };

  const handleRemovePage = (index) => {
    setFormData({
      ...formData,
      pages: formData.pages.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.manga_id || !formData.title || !formData.order || formData.pages.length === 0) {
      alert("All form fields are required");
      return;
    }

    dispatch(createChapter(formData));
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="relative">
          <img
            src="/images/profile.jpeg"
            alt="New Chapter Background"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold drop-shadow-lg">
              New Chapter
            </h1>
          </div>
        </div>

        <div className="-mt-20 mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 w-full max-w-4xl relative z-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Insert Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Insert Order</label>
              <input
                type="number"
                name="order"
                value={formData.order}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Insert Pages</label>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  className="mt-1 block flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
                <button
                  type="button"
                  onClick={handleAddPage}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Add Page
                </button>
              </div>
              {formData.pages.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {formData.pages.map((page, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{page}</span>
                      <button
                        type="button"
                        onClick={() => handleRemovePage(index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Create Chapter
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewChapter;
