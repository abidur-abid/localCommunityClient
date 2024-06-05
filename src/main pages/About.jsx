import React from 'react';
import SectionTitle from '../shared components/SectionTitle';
import TeamBanner from '../components/TeamBanner';
import TeamMembers from '../components/TeamMembers';

const About = () => {
    return (
        <section>
            <SectionTitle title={"About Us"}></SectionTitle>
            <TeamBanner></TeamBanner>
            <SectionTitle title={"Our Team"}></SectionTitle>
            <TeamMembers></TeamMembers>
        </section>
    );
};

export default About;