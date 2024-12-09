import React, { useEffect } from 'react';
import Footer from '../Components/Footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../Store/actions/AuthActions.js';
import Carousel from '../Components/carrousel.jsx';
import { useSelector } from 'react-redux';

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
  }, [dispatch])

  const requiredAuth = true
  const token = useSelector(state => state.authStore.token);
  console.log("token", token);
  console.log("userId", token?.userId);
  
  
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
      className="hidden sm:block w-full  h-[600px]  brightness-50 object-cover"
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
      {
        (!requiredAuth || !token) ? (
          <button onClick={() => navigate("/welcomeback")}
          className="bg-pink-600 text-white rounded-md w-[240px] h-[55px] text-[24px] font-medium font-poppins">
           Sign In
         </button>
        ) : (
          <button onClick={() => navigate("/mangas")}
          className="bg-pink-600 text-white rounded-md w-[240px] h-[55px] text-[24px] font-medium font-poppins">
           Mangas
         </button>
        )
      }

    </div>
  </div>
</div>

      <div className='sm:block hidden'>
        <Footer />
        </div>
    </>
  );
};

export default Home;