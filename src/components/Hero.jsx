import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import React from 'react';
import photo from '../images/profile.png'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='my-20 lg:my-0 '>
     <>
      <div className='lg:flex justify-center gap-32 items-center'>
        
        <div className="mb-8">
          <h1 className='text-4xl my-2 lg:text-left sm:text-center md:text-center text-center font-bold'>Local Community </h1>
          <p className='text-2xl my-2 lg:text-left sm:text-center md:text-center text-center bg-headerFooterColor rounded  font-bold px-10 py-2 mx-auto'>Information Sharing Platform</p>
          <h2 className='text-xl my-2 lg:text-left sm:text-center md:text-center text-center font-bold'>Share Your Feelings with Others <br /> and help others community people as well as.</h2>
          
        </div>
        <div >
          <img src={photo} className='rounded w-96 h-96 rounded-full mx-auto '/>
        </div>
      </div>
      </>
    </section>
  );
};

export default Hero;