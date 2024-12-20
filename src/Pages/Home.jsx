import React, { useEffect } from 'react';
import Footer from '../Components/Footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../Store/actions/AuthActions.js';
import Carousel from '../Components/carrousel.jsx';



const loginWithToken = async (token) => {
const role = useSelector(state => state.authStore.user?.role)
  console.log("role", role);

  if (role === 1 && token) {
    try {
      console.log("se ejecuto loginWithToken");

      const response = await axios.get("http://localhost:8080/api/authors/validateauthor", {
        headers: {
          Authorization: `Bearer ${token}`,
        },

      });
      return response.data.response;
    } catch (error) {
      console.log("error", error);
    }

  } else if (role === 0 && token) {
    try {
      console.log("se ejecutó loginWithToken");

      const response = await axios.get("http://localhost:8080/api/users/validationToken", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      return response.data.response;
    } catch (error) {
      console.log("error", error);
    }
  }
};

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.authStore.user?.role);
  const token = useSelector((state) => state.authStore?.token);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromParams = params.get('token');
    // const role = params.getItem('role');

    if (tokenFromParams) {
      localStorage.setItem('token', tokenFromParams);
      loginWithToken(tokenFromParams, role).then((user) => {
        dispatch(setUser({ user, tokenFromParams }));
      });
    }
    navigate("/home");
  }, [dispatch, role, navigate]);

  const requiredAuth = true;

  return (
    <>
      <Carousel />
      <div className="relative sm:m-5 h-3/6">
        <div>
          <img
            src="/images/home2.jpeg"
            alt="Banner"
            className="w-full h-screen brightness-50 object-cover sm:hidden"
          />
          <img
            src="/images/home.jpg"
            alt="Responsive Banner"
            className="hidden sm:block w-full h-[600px] brightness-50 object-cover"
          />
        </div>

        <div className="text-center mt-[70px] lg:text-start absolute sm:hidden md:block top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] lg:left-[10%] lg:translate-x-[-00%]">
          <div className="py-2">
            <h1 className="text-4xl lg:text-7xl font-bold leading-[60.92px] font-poppins text-white">
              Live the emotion of the manga
            </h1>
          </div>
          <div className="py-2">
            <h2 className="text-2xl font-normal font-poppins leading-[22.84px] text-white">
              Find the perfect manga for you
            </h2>
          </div>
          <div className="py-2">
            <h3 className="text-lg font-semibold font-poppins text-white">#MingaForever</h3>
          </div>
          <div className="py-2">
            {(!requiredAuth || !token) ? (
              <button
                onClick={() => navigate("/welcomeback")}
                className="bg-pink-600 text-white rounded-md w-[240px] h-[55px] text-[24px] font-medium font-poppins"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={() => navigate("/mangas")}
                className="bg-pink-600 text-white rounded-md w-[240px] h-[55px] text-[24px] font-medium font-poppins"
              >
                Mangas
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="sm:block hidden">
        <Footer />
      </div>
    </>
  );
};

export default Home;
