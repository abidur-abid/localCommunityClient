import React from 'react';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import AboutUs from '../components/AboutUs';
import OurActivities from '../components/OurActivities';
import Gallery from '../components/Gallery';
import SectionTitle from '../shared components/SectionTitle';
import CurrentActivities from '../components/CurrentActivities';

const Home = () => {
    return (
        <section className='my-24'>
            <Hero></Hero>
            <SectionTitle title={" Insights"}></SectionTitle>
            <Counter></Counter>
            <SectionTitle title={"About Us"}></SectionTitle>
            <AboutUs></AboutUs>
            <SectionTitle title={"Our Activities"}></SectionTitle>
            <OurActivities></OurActivities>
            <SectionTitle title={"Current Activities"}></SectionTitle>
            <CurrentActivities></CurrentActivities>
            <SectionTitle title={"Image Gallery"}></SectionTitle>
            <Gallery></Gallery>
        </section>
    );
};

export default Home;