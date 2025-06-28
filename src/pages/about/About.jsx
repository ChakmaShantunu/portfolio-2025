import React from 'react';

const AboutMe = () => {
    return (
        <section className="relative border border-base-300 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 px-6 max-w-5xl mx-auto rounded-3xl">

            <div className="relative rounded-lg p-8 overflow-hidden">  {/* relative added here */}

                <h2 className="text-3xl font-semibold text-primary">About Me</h2>
                <div className='h-2 border border-gray-200 rounded w-18 bg-primary mb-12 mt-2'></div>

                <p className="text-base-content text-opacity-80 leading-relaxed text-lg">
                    I have experience creating responsive and user-friendly interfaces using React, Tailwind CSS, and JavaScript. I'm comfortable working with both frontend and backend technologies, including Firebase, MongoDB, Node.js, Express.js, and REST APIs. I also use Git & GitHub for version control and team collaboration.
                </p>

                {/* Circle bubble */}
                <div className='absolute rounded-full opacity-5 overflow-hidden bg-primary
  w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48
  -bottom-16 sm:-bottom-20 md:-bottom-24
  -left-16 sm:-left-20 md:-left-24
  rotate-12'></div>

                <div className='absolute rounded-full opacity-5 overflow-hidden bg-primary
  w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48
  -top-16 sm:-top-20 md:-top-24
  -right-16 sm:-right-20 md:-right-24
  rotate-12'></div>


            </div>

        </section>
    );
};

export default AboutMe;
