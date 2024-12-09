// src/Pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Components/Footer/Footer";
import { deleteAccount } from "../Store/actions/profileActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector((state) => state.authStore.user?._id);
  const token = useSelector((state) => state.authStore.token);
  const { user, loading, error } = useSelector((state) => state.authStore);
  

  const [authors, setAuthors] = useState([]);
  let { _id } = authors?.[0] || {};

  
  
  

  useEffect(() => {
    const fetchAuthorByUserId = async () => {
      try {
        const config = {
          method: 'get',
          url: `http://localhost:8080/api/authors/user/id/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.request(config);
        setAuthors(response.data.response);
      } catch (error) {
        console.log("Error fetching author:", error);
      }
    };
    if (id) {
      fetchAuthorByUserId();
    }
  }, [token]);

  const handleSave = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const profileImage = e.target.profileImage.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const city = e.target.city.value;
    const country = e.target.country.value;

    const updatedData = {
      password, 
      photo: profileImage,
      firstName,
      lastName,
      city,
      country,
    };
    console.log(id);
    
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.put(
        `http://localhost:8080/api/authors/update/${_id}`,
        updatedData,
        config
      );

      console.log('Profile updated successfully:', response.data);
      alert('Profile updated successfully.');

      setAuthors([response.data.response]);
      
    } catch (error) {
      console.error('Error updating profile:', error.response?.data || error.message);
      alert(`Error updating profile: ${error.response?.data?.message || error.message}`);
    }
    useNavigate("/home");

  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action is irreversible.")) {
      try {
        await dispatch(deleteAccount());
        alert("Account deleted successfully.");
        navigate("/"); 
      } catch (err) {
        console.error("Error deleting account:", err);
        alert(`Error deleting account: ${err.response?.data?.message || err.message}`);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

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
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    defaultValue={authors?.[0]?.name || ""}
                    required
                    className="mt-1 block w-full px-4 py-1 border-b border-black shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    defaultValue={authors?.[0]?.lastName || ""}
                    required
                    className="mt-1 block w-full px-4 py-1 border-b border-black shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>



                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter a new password"
                    className="mt-1 block w-full px-4 py-1 border-b border-black shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
                    Profile Image URL
                  </label>
                  <input
                    type="url"
                    name="profileImage"
                    id="profileImage"
                    defaultValue={authors?.[0]?.photo || ""}
                    placeholder="https://example.com/image.jpg"
                    className="mt-1 block w-full px-4 py-1 border-b border-black shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    defaultValue={authors?.[0]?.city || ""}
                    className="mt-1 block w-full px-4 py-1 border-b border-black shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    defaultValue={authors?.[0]?.country || ""}
                    className="mt-1 block w-full px-4 py-1 border-b border-black shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>


                <div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Save
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Delete Account
                  </button>
                </div>
              </form>
            </div>

            <div className="text-center">
              <img
                src={authors?.[0]?.photo || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h2 className="text-lg font-semibold mt-4">
                {authors?.[0]?.name} {authors?.[0]?.lastName}
              </h2>
              <p className="text-gray-500">{authors?.[0]?.email}</p>

              <p className="text-gray-400 text-sm">City: {authors?.[0]?.city}</p>
              <p className="text-gray-400 text-sm">Country: {authors?.[0]?.country}</p>
            </div>
          </div>
          {error && (
            <div className="mt-4 text-center text-red-500">
              {error}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
