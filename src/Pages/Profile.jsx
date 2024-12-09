import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Components/Footer/Footer";
import { updateProfile, deleteAccount } from "../Store/actions/profileActions";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);

  const [formData, setFormData] = useState(user || {});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData)); 
  };

  const handleDelete = () => {
    dispatch(deleteAccount()); 
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="relative">
          <img
            src="/images/profile.jpeg"
            alt="Profile Background"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold drop-shadow-lg">
              Profile
            </h1>
          </div>
        </div>

        <div className="-mt-20 mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 w-full max-w-4xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-6" onSubmit={handleSave}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City, State</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="text"
                    name="birthDate"
                    value={formData.birthDate || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">URL Profile Image</label>
                  <input
                    type="text"
                    name="profileImage"
                    value={formData.profileImage || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mt-2"
                >
                  Delete Account
                </button>
              </form>

            </div>

            <div className="text-center">
              <img
                src={formData.profileImage || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h2 className="text-lg font-semibold mt-4">
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="text-gray-500">{formData.city}</p>
              <p className="text-gray-400 text-sm">{formData.birthDate}</p>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
