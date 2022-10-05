import React from "react";
import { Link } from "react-scroll";
import { FaPhoneVolume } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


const Home = () => {
  return (
    <div name="home" id="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="container">
          <h2 className="text-1xl sm:text-5xl text-white">
            I'am Front end developer with react js
          </h2>
          <p className="text-white py-5">
            A Frontend developer with React js, to get an opportunity that allows me to showcase my skills and contribute to the company growth. I love to work on web application using technologies like
            React, javascript, bootstrap, css and Html.
          </p>

         <div>
            <h3  id="mail" className="group text-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer">
             <FaEnvelope />shanmugapriyadakshina@gmail.com</h3>   
            <h3 id="mbl"className="group text-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer">
             <FaPhoneVolume /> +91 8838537566</h3>   
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;