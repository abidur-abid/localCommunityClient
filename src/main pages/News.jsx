import { useEffect, useState } from 'react';
import articlebg from '../images/articleBg.png';
import toast from 'react-hot-toast';
import SectionTitle from '../shared components/SectionTitle';
import { Link } from 'react-router-dom';

const News = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`http://localhost:5000/news`);

                if (!res.ok) {
                    throw new Error("Failed to fetch News");
                }

                const data = await res.json();
                setNews(data);
            } catch (error) {
                console.error("Error loading News: ", error);
                toast.error("Failed to fetch News");
            }
        };

        fetchPosts();
    }, []); // Fetch data on component mount

    console.log(news);

    const filteredNews = news.filter((item) => 
        search.toLowerCase() === ''
            ? true
            : item.topicName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className='news'>
            <div className=" -mt-0 ">
                <SectionTitle title={'All News'} />
            </div>
            <div className='max-w-2xl mx-auto mb-20'>
                <form>
                    <input 
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className="grow placeholder-gray-600 bg-transparent border-2 border-headerFooterColor rounded-full px-10 py-2 w-full"
                        placeholder={"Search Location"}
                    />
                </form>
            </div>
            <div className="grid lg:grid-cols-3 justify-center items-center grid-cols-1 gap-5 mb-20">
                {filteredNews.length > 0 ? (
                    filteredNews.map((p, index) => (
                        <div className="card bg-headerFooterColor shadow-xl image-full mx-auto" key={p._id}>
                            <figure>
                                <img src={articlebg} alt="Article Background" className='rounded-xl' />
                            </figure>
                            <div className="card-body">
                                <p className="text-xl font-bold text-headerFooterColor">{p.topicName}</p>
                                <p className="text-md font-semibold text-headerFooterColor">Course Name: {p.location}.</p>
                                <p className="text-md text-headerFooterColor">Date: {p.date}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/news/${p._id}`}>
                                        <button className="button text-gray-600 hover:text-headerFooterColor">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <section className='loadingPage mx-auto'>
                        <span className="loading loading-bars loading-lg text-headerFooterColor"></span>
                    </section>
                )}
            </div>
        </section>
    );
};

export default News;
