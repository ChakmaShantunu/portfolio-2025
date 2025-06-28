import React from 'react';
import heroImg from '../../assets/images/profile3.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="bg-base-200">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

                {/* Text Content */}
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl font-bold leading-none sm:text-6xl text-primary">
                        Hi, I’m Shantunu.
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-base-content mt-4">
                        A React Developer from Bangladesh
                    </h2>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-secondary">
                        I build beautiful, performant websites and web apps.
                        <br className="hidden md:inline lg:hidden" />
                        Let’s create something amazing together.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button className="btn btn-primary btn-md">Download Resume</button>
                    </div>
                    <div className="flex mt-6 gap-6 sm:justify-center lg:justify-start text-2xl">
                        <a
                            href="https://www.linkedin.com/in/your-linkedin-username"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/your-github-username"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Image with design */}
                <div className="relative flex items-center justify-center p-6 mt-8 lg:mt-0 lg:w-1/2 h-[28rem]">
                    {/* Background Circles */}
                    <div className="absolute w-56 h-56 bg-primary opacity-30 rounded-full top-0 left-16 blur-3xl -z-10"></div>
                    <div className="absolute w-36 h-36 bg-accent opacity-40 rounded-full bottom-4 right-12 blur-xl -z-10"></div>

                    {/* Profile Image */}
                    <img
                        src={heroImg}
                        alt="Hero"
                        className="object-cover w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full shadow-lg border-4 border-white mb-48 md:mb-0"
                    />

                </div>
            </div>
        </section>
    );
};

export default Hero;
