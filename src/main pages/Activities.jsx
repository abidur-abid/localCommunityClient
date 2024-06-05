import tree from "../images/tree.jpg"
import flood from "../images/flood.jpg"
import play from "../images/play.jpg"
import talent from "../images/talent.jpg"
import winter from "../images/winter.jpg"

const Activities = () => {
    return (
        <section className="mt-8 activities">
            <div className="card lg:card-side shadow-xl border-headerFooterColor border-2 mb-5">
            <figure className="lg:w-1/2 w-full"><img src={tree} alt="MSS" className='w-[500px]'/></figure>
            <div className="card-body bg-primaryColor w-1/2">
                <h2 className="card-title text-center lg:text-left">Tree Plantation Activities</h2>
                <p className='text-center lg:text-left'>Our organization is dedicated to promoting environmental sustainability through proactive tree plantation activities. We believe in the power of trees to combat climate change, improve air quality, and enhance biodiversity. Our passionate volunteers come together to plant trees in urban and rural areas, creating green spaces that benefit both the environment and the community. By planting trees, we are not only greening our surroundings but also fostering a sense of responsibility towards nature and future generations. Join us in our mission to make the world greener, healthier, and more beautiful, one tree at a time.</p>
                
            </div>
            </div>

            <div className="card lg:card-side shadow-xl border-headerFooterColor border-2 mb-5">
            <figure className="lg:w-1/2 w-full"><img src={talent} alt="MSS" className='w-[500px]'/></figure>
            <div className="card-body bg-primaryColor w-1/2">
                <h2 className="card-title text-center lg:text-left">Recognize Talent Student</h2>
                <p className='text-center lg:text-left'>Our social organization is committed to recognizing and celebrating the contributions of individuals who make a positive impact in our community. We believe in the importance of acknowledging the efforts and dedication of those who go above and beyond to help others. As a token of our appreciation, we offer gifts to these exceptional individuals, honoring their commitment and inspiring others to follow in their footsteps. Through our recognition program, we aim to foster a culture of gratitude and encouragement, empowering more people to contribute to the betterment of our society. Join us in celebrating these everyday heroes and spreading kindness and generosity.</p>
                
            </div>
            </div>

            <div className="card lg:card-side shadow-xl border-headerFooterColor border-2 mb-5">
            <figure className="lg:w-1/2 w-full"><img src={winter} alt="MSS" className='w-[500px]'/></figure>
            <div className="card-body bg-primaryColor w-1/2">
                <h2 className="card-title text-center lg:text-left">Distribution Winter Cloth</h2>
                <p className='text-center lg:text-left'>Our social organization is dedicated to supporting those in need during the harsh winter months by distributing warm clothing. We believe that everyone deserves to stay warm and comfortable, regardless of their circumstances. Through our winter clothing drives, we collect and distribute coats, blankets, and other essential items to vulnerable individuals and families in our community. Our compassionate volunteers work tirelessly to ensure that these necessities reach those who need them most. By providing warmth and comfort, we strive to bring a bit of hope and relief to those facing the challenges of winter. Join us in our mission to spread warmth and kindness during the coldest season of the year.</p>
                
            </div>
            </div>

            <div className="card lg:card-side shadow-xl border-headerFooterColor border-2 mb-5">
            <figure className="lg:w-1/2 w-full"><img src={flood} alt="MSS" className='w-[500px]'/></figure>
            <div className="card-body bg-primaryColor w-1/2">
                <h2 className="card-title text-center lg:text-left">Food For Flood</h2>
                <p className='text-center lg:text-left'>Our social organization is committed to providing crucial support to individuals and communities affected by floods. Recognizing the devastating impact of such natural disasters, we mobilize quickly to offer emergency relief and aid. Our dedicated volunteers and staff work tirelessly to distribute essential supplies, including food, clean water, clothing, and medical aid, to those in need. We also assist with temporary shelter arrangements and coordinate with other agencies to ensure comprehensive support. Through our efforts, we aim to bring immediate relief and long-term recovery solutions to flood-affected areas, helping people rebuild their lives and communities. Join us in our mission to stand by those in need and make a meaningful difference in times of crisis.</p>
                
            </div>
            </div>
        </section>
    );
};

export default Activities;
