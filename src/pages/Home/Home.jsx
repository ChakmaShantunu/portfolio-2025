import React from 'react';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/skills/Skills';
import Education from '../../components/Education/Education';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import AboutMe from '../../components/about/AboutMe';

const Home = () => {
    return (
        <div className='space-y-6'>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;