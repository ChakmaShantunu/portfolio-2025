import React from 'react';
import Hero from '../../components/Hero/Hero';
import AboutMe from '../about/About';
import Skills from '../../components/skills/Skills';

const Home = () => {
    return (
        <div className='space-y-4'>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;