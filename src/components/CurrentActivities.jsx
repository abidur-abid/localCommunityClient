import React from 'react';
import skill from '../images/skill.jpg'
import education from '../images/education.jpg'
import cleaning from '../images/cleaning.jpg'

const CurrentActivities = () => {
    return (
        <section className='currentActivities'>
            <div className='flex justify-center items-center gap-5'>
                <div className="card w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={skill} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Skill Development</h2>
                    </div>
                </div>
                <div className="card w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={education} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Child Education</h2>
                    </div>
                </div>
                <div className="card w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={cleaning} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cleaning Public Spaces</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentActivities;