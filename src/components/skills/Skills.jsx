import React from 'react';

const skills = [
    { name: 'JavaScript', level: 60 },
    { name: 'React', level: 75 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Node.js', level: 50 },
    { name: 'Express.js', level: 50 },
    { name: 'MongoDB', level: 50 },
    { name: 'Firebase', level: 90 },
    { name: 'Typescript', level: 60 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'Prisma', level: 40 },
];

const Skills = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16" id="skills" data-aos="fade-up-left">
            <h2 className="text-3xl font-semibold text-primary">Skills</h2>
            <div className='h-2 border border-gray-200 rounded w-18 bg-primary mb-12 mt-2'></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {skills.map(({ name, level }) => (
                    <div key={name}>
                        <div className="flex justify-between mb-1">
                            <span className="font-medium text-base-content">{name}</span>
                            <span className="font-medium text-sm text-base-content">{level}%</span>
                        </div>
                        <div className="w-full bg-base-300 rounded h-4">
                            <div
                                className="bg-primary h-4 rounded"
                                style={{ width: `${level}%` }}
                                data-aos="slide-right"
                                data-aos-delay="30"
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
