import React from 'react';
import ismail from '../images/ismail.jpg'
import abid from "../images/abid.jpeg"
import web from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import github from '../images/twitter.png'

const TeamMembers = () => {
    return (
        <section className='teamMembers mb-20'>
            <div className="custom-container">
                <div className="custom-row contactForm">
                    <div className="custom-column w-1/3 mr-2">
                        <img src={ismail} className='custom-image rounded' />
                    </div>
                    <div className="custom-column w-2/3">
                        <h4 className='color text-3xl text-center mb-4 font-bold'>Md. Ismail Hossain </h4>
                        <p className='custom-background rounded p-1 text-center mb-4 font-bold text-lg'>General Member</p>
                        <p className='color text-justify mb-4 text-lg'>As a general member of the Local Community, I am proud to be part of an organization dedicated to fostering unity, supporting local initiatives, and enhancing the well-being of our neighborhood. Together, we strive to create a vibrant, inclusive, and supportive environment for all.</p>
                        <div className='flex gap-4 justify-center'>
                            <a href="https://www.linkedin.com/in/md-ismail-hossain-0760791a8/"><img src={linkedin} className='w-12 h-12'/></a>
                            <img src={github} className='w-12 h-12'/>
                            <img src={web} className='w-12 h-12'/>
                            
                        </div>
                    </div>
                </div>
                <div className="custom-row contactForm mt-12">                    
                    <div className="custom-column w-2/3">
                        <h4 className='color text-3xl text-center mb-4 font-bold'>Abidur Rahman Abid </h4>
                        <p className='custom-background rounded p-1 text-center mb-4 font-bold text-lg'>General Member</p>
                        <p className='color text-justify mb-4 text-lg'>As a general member of the Local Community, I am committed to contributing to our collective efforts to promote social cohesion, support community projects, and enhance the quality of life for everyone. It is a privilege to be part of a group that values collaboration and mutual support.</p>
                        <div className='flex gap-4 justify-center'>
                            <a href="https://www.linkedin.com/in/abid40/"><img src={linkedin} className='w-12 h-12'/></a>
                            <a href="https://github.com/abidur-abid"><img src={github} className='w-12 h-12'/></a>
                           <a href="https://client-23b8b.web.app/"> <img src={web} className='w-12 h-12'/></a>
                            
                        </div>
                    </div>
                    <div className="custom-column w-1/3 ml-2">
                        <img src={abid} className='custom-image rounded' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;