import React from 'react';
import Hero from '../../components/Hero/Hero';
import AboutMe from '../about/About';
import Skills from '../../components/skills/Skills';
import Education from '../../components/Education/Education';
import Projects from '../../components/Projects/Projects';

const Home = () => {
    return (
        <div className='space-y-6'>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Home;