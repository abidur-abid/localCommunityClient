
import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import SectionTitle from '../shared components/SectionTitle';



const AllNews = () => {
 
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await fetch(`http://localhost:5000/news`);
      

      if (!res.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.error('Error loading posts: ', error);
      toast.error('Failed to fetch articles');
    }
  };

  useEffect(() => {
    fetchNews();
  }, []); // Fetch data on component mount

  const handleRemoveNews = async (id) => {
    const confirmed = confirm("Are you sure?");
    const token = localStorage.getItem("token");

    if (confirmed) {
      const res = await fetch(`http://localhost:5000/news/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      
      if (res.ok) {
        toast.success('Successfully Deleted News')
      }
    }
  };

  

  return (
    <section>
      <div className="lg:-mt-20">
        <SectionTitle title={'All News'} />
      </div>
      {news && news.map((ar, index) => (
        <div key={ar._id} className="mb-16">
          <div className="contactForm -mt-10 border-4 border-headerFooterColor rounded px-10 py-4">
            <div className="flex justify-center gap-1">
              <p className="text-lg">{index + 1}.</p>
              <p className="text-lg">{ar.topicName}</p>
            </div>
            <div className="flex justify-center gap-5">
              <button onClick={() => handleRemoveNews(ar._id)}>
                <Link href={''} className="hover:font-bold text-xl">
                  <MdDelete />
                </Link>
              </button>
              <Link to={`/dashboard/allnews/${ar._id}`} className="hover:font-bold text-xl">
                <FaEdit />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllNews;