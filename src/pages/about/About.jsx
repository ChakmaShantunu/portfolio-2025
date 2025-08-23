import React from "react";
import profileImg from '../../assets/images/profile.png'

const techs = [
    "MongoDB", "JavaScript", "Node.js", "Express.js",
    "React", "Tailwind CSS", "DaisyUI", "JWT", "Firebase"
];

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-base-100 text-base-content" data-aos="fade-up">
            {/* Profile Image */}
            <img
                src={profileImg} // Replace with your image URL
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-contain border-4 border-primary"
            />

            {/* Title */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-6 mb-4 py-12 text-center">I’m a passionate React Developer from Bangladesh with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Tailwind CSS. Currently, I’m expanding my expertise in backend development using Node.js, Express.js, MongoDB, and Firebase.
            </h1>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                {techs.map((tech, index) => (
                    <div
                        key={index}
                        className="bg-primary text-white px-4 py-2 rounded-xl shadow-md text-sm md:text-base"
                    >
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
