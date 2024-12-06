import React from 'react';
import Footer from '../Components/Footer/Footer.jsx';
import Carousel from '../Components/carrousel.jsx';


const Home = () => {
  return (
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;