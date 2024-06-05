import FormContact from "../shared components/FormContact";
import SectionTitle from "../shared components/SectionTitle";

const Contact = () => {
    return (
        <section className="contact">
            {/* <SocialContact/> */}
            <div className=''>
            <SectionTitle title={'Feel Free To Ask'}/>
            </div>
            <FormContact/>
        </section>
    );
};

export default Contact;