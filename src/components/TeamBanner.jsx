import React from 'react';
import team from '../images/team.svg'

const TeamBanner = () => {
    return (
        <section className='team'>
            <div className="custom-container">
                <div className="custom-row contactForm">
                    <div className="custom-column w-1/2">
                        <h3 className='color text-4xl font-bold'>We have an expert team. Our team is always ready to give support.</h3>
                        <button className='button color w-full mt-10'><i class="fa-solid fa-envelope mr-2"></i>Contact</button>
                    </div>
                    <div className="custom-column w-1/2">
                      <img src={team} className='custom-image'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamBanner;