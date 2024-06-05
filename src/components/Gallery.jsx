
import React from 'react';
import g1 from '../images/g1.jpg'
import g2 from '../images/g10.jpg'
import g3 from '../images/g3.jpg'
import g4 from '../images/g4.jpg'
import g5 from '../images/g5.jpg'
import g6 from '../images/g8.jpg'
import g7 from '../images/g1.jpg'
import g8 from '../images/g8.jpg'
import g9 from '../images/g9.jpg'
import g10 from '../images/g10.jpg'
import g11 from '../images/g11.jpg'
import g12 from '../images/g12.jpg'

const Gallery = () => {
    return (
       <section className='mt-20 gallery'>
         <div className='grid grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5'>
            <img src={g1} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g2} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g3} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g4} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g5} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g6} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g7} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g8} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g9} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g10} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g11} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g12} className='hover:scale-105 hover:duration-1000 rounded'/>
         </div>
       </section>
    );
};

export default Gallery;