import React from 'react';
import { useLoaderData } from 'react-router-dom';
import articleBg from '../images/articleBg.png';


const SingleNews = () => {

  const singleNews = useLoaderData();
  console.log(singleNews);
  return (
    <section>
      <div className="">
        <img src={articleBg} />
      </div>
      <div className="my-10 singleArticle">
        <h1 className="text-xl lg:text-2xl font-bold uppercase text-center">
          Location: { singleNews ? singleNews.location : 'Nothing Found CourseName'}
        </h1>
        <div className="my-5 lg:flex justify-center items-center gap-10 font-semibold lg:text-xl text-md text-center">
          <h1>Topic: {singleNews ? singleNews.topicName : 'Nothing Found Topic Name'}</h1>
          <h1>Date: {singleNews ? singleNews.date : 'Nothing Found Date'}</h1>
        </div>
        <h2 className="text-justify ">{singleNews ? singleNews.description : 'Nothing Found Description'}</h2>
      </div>
    </section>
  );
};

export default SingleNews;