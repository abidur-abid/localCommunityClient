

import tree from '../images/trees.png'
import winter from '../images/beanie.png'
import flood from '../images/flooded.png'
import talent from '../images/bridge.png'

const OurActivities = () => {
    return (
       <section className='ourActivities'>
        <div className='lg:flex mt-20 justify-center gap-32 items-center'>
        <div>
            <img src={flood} className='w-40 lg:w-96 mx-auto lg:mx-0'/>
            <h1 className='text-lg font-semibold mt-8 text-center uppercase'>Disaster Management</h1>
         </div>
         <div className='mt-12 lg:mt-0'>
            <img src={tree} className='w-40 lg:w-96 mx-auto lg:mx-0'/>
            <h1 className='text-lg font-semibold mt-8 text-center uppercase'>Tree Plantation</h1>
         </div>
         <div className='mt-12 lg:mt-0'>
            <img src={winter} className='w-40 lg:w-96 mx-auto lg:mx-0'/>
            <h1 className='text-lg font-semibold mt-8 text-center uppercase'>Clothing Help</h1>
         </div>
         <div className='mt-12 lg:mt-0'>
            <img src={talent} className='w-40 lg:w-96 mx-auto lg:mx-0'/>
            <h1 className='text-lg font-semibold mt-8 text-center uppercase'>Talent Recognition</h1>
         </div>
        </div>
       </section>
    );
};

export default OurActivities;
