import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const educationData = [
    {
        degree: 'BSS in Economics',
        institution: 'National University',
        year: '2015 – 2019',
    }
];

const Education = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16" id="education" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-primary">Education</h2>
            <div className="h-2 border border-gray-200 rounded w-18 bg-primary mb-12 mt-2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="group relative border border-base-300 bg-base-100 shadow-md p-6 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        {/* Glowing border effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 rounded-xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary text-white p-3 rounded-full shadow-lg">
                                    <FaUniversity size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-base-content">{edu.degree}</h3>
                                    <p className="text-base-content text-opacity-80 text-sm">{edu.institution}</p>
                                </div>
                            </div>
                            <p className="text-sm text-base-content text-opacity-70">{edu.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
