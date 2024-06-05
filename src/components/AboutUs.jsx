
import React from 'react';
import about from '../images/about.png'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section>
            <div className='lg:flex  mt-20 justify-center gap-32 items-center'>
                <div className=''>
                < img src={about} className='w-72 mb-8 h-auto mx-auto lg:mx-0 rounded '/>
                </div>
                <div className='w-1/2 mx-auto lg:mx-0'>
                <h1 className='text-2xl font-semibold '>Hey, Guys.</h1> <br />
                <p className='lg:text-justify mb-4'>Local Community is a social organization dedicated to fostering connections and supporting initiatives that enhance the well-being of residents. Through various programs and events, it aims to build a stronger, more united neighborhood where everyone feels valued and empowered.</p>
                <div className='flex justify-center lg:justify-start'>
                 <Link to={'/contact'}><button className='button animate-pulse mx-auto lg:ml-0'>Email Us</button></Link>
                </div>
                </div>
            </div>
            
        </section>
    );
};

export default AboutUs;