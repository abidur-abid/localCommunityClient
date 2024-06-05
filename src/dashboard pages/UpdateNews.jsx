
import React, { useState } from 'react';
import updateArticle from '../images/updateArticle.svg'
import { useLoaderData } from 'react-router-dom';


const UpdateNews = () => {

   const news = useLoaderData();
   console.log(news);


  const [newLocation, setNewLocation] = useState('');
  const [newTopicName, setNewTopicName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/news/${news?._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newLocation, newTopicName, newDate, newDescription }),
      });
       
      console.log( newLocation, newTopicName, newDate, newDescription)
      if (!res.ok) {
        throw new Error("Failed to update post");
      }


    } catch (error) {
      console.log(error);
    }
  };



    return (
        <section className='lg:flex justify-center items-center gap-20 mb-16 mt-16 lg:mt-0' >
            <div>
                <img src={updateArticle} width={300} className=' mx-auto mb-8'/>
            </div>
            <div>
            <form onSubmit={handleSubmit} action="" className='px-10 '>  
                    <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setNewLocation(e.target.value)}
                    value={newLocation}
        
                    type="text"
       
                    id="courseName"
                    className="grow placeholder-gray-600 " placeholder={news.location} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setNewTopicName(e.target.value)}
                    value={newTopicName}
        
                    type="text"
       
                    id="topicName"
                    className="grow placeholder-gray-600 " placeholder={news.topicName}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setDate(e.target.value)}
                    value={newDate}
        
                    type="text"
       
                    id="date"
                    className="grow placeholder-gray-600 " placeholder={news.date}/>
                    </label>
                    <textarea onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    type="text"
                    id="description"
                    className="textarea textarea-bordered textarea-md w-full  mt-8 placeholder-gray-600 text-base" 
                    placeholder={news.description}  ></textarea>
                    <input type='submit' value='Submit' className='button mt-8 cursor-pointer w-full uppercase'/>
                </form>
            </div>
        </section>
    );
};

export default UpdateNews;