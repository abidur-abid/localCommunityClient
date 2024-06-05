
import React, { useState } from 'react';
import addNews from '../images/writeArticle.svg'
import toast from 'react-hot-toast';
const apiUrl = import.meta.env.VITE_API_URL;

const AddNews = () => {

    const [location, setLocation] = useState("");
    const [topicName, setTopicName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!location || !topicName || !date || !description ) {
      alert("News Name, Topic Name, Date and description are required.");
      return;
    }
    console.log(location, topicName , date, description);
    try {
      const res = await fetch('https://localcommunityserver.onrender.com/news', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ location, topicName , date, description }),
      });

      if (res.ok) {
        toast.success("News Added Successfully")
      } else {
        toast.error("Failed to create an article")
      }
    } catch (error) {
      console.log(error);
    }

      setLocation('');
      setTopicName('');
      setDate('');
      setDescription('');

  };

    return (
        <section className='lg:flex justify-center items-center gap-20 mb-16 mt-16 lg:mt-0' >
            <div>
                <img src={addNews} width={300} className=' mx-auto mb-8'/>
            </div>
            <div>
                <form onSubmit={handleSubmit} action="" className='px-10 '>  
                    <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setLocation(e.target.value)}
                    value={location}
        
                    type="text"
       
                    id="courseName"
                    className="grow placeholder-gray-600 " placeholder="Location Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setTopicName(e.target.value)}
                    value={topicName}
        
                    type="text"
       
                    id="topicName"
                    className="grow placeholder-gray-600 " placeholder="Topic Name"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setDate(e.target.value)}
                    value={date}
        
                    type="text"
       
                    id="date"
                    className="grow placeholder-gray-600 " placeholder="Set Date"/>
                    </label>
                    <textarea onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    id="description"
                    className="textarea textarea-bordered textarea-md w-full  mt-8 placeholder-gray-600 text-base" 
                    placeholder="Write Topic Description"  ></textarea>
                    <input type='submit' value='Submit' className='button mt-8 cursor-pointer w-full uppercase'/>
                </form>
            </div>
        </section>
    );
};

export default  AddNews;