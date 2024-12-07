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
            <Carousel />

    <div className="relative m-5 h-3/6">
    
        <img
          src="/images/home.jpg"
          alt="Banner"
          className="w-full h-[551px] object-cover animate-zoom"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <h1 className="text-6xl font-bold mb-4">Live the emotion of the manga</h1>
          <h3 className='text-left text-2xl'>Find the perfect manga for you</h3>
          <h4 className='font-bold'>#MingaForever</h4>
          <button
            onClick={() => navigate("/welcomeback")}
            className="m-5 p-5 w-1/4 text-xl bg-pink-600 rounded-lg hover:bg-slate-600"
          >
            Sign In
          </button>
        </div>
        </div>
      <Footer />
      </>
  );
};

export default Home;