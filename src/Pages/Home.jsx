import React, { useEffect } from 'react';
import Footer from '../Components/Footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../Store/actions/AuthActions.js';
import Carousel from '../Components/carrousel.jsx';

const loginWithToken = async (token) => {
  try {
    console.log("se ejecuto loginWithToken");

    const response = await axios.get("http://localhost:8080/api/users/validationToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
    return response.data.response

  } catch (error) {
    console.log("error", error);
  }
}




const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      loginWithToken(token).then((user) => {
        dispatch(setUser({ user, token }))
      })
    }
    navigate("/home");
  },[dispatch])


  return (
      <>
    <div>
      <Carousel/>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="/images/home.jpg"
                alt="Banner"
                className="w-full"
              />
            </div>
            <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold">Welcome to Our Platform</h2>
              <h3 className="text-2xl font-bold mt-4">Discover New Manga</h3>
              <h4 className="text-lg mt-4">
                Explore our extensive collection of manga series and stay up-to-date with the latest releases.
              </h4>
              <button onClick={() => navigate("/welcomeback")}className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default Home;