import React from 'react';
import ProjectCard from './ProjectCard';

import projectImg1 from '../../assets/images/social events.png';
import projectImg2 from '../../assets/images/freelance platform.png';
import projectImg3 from '../../assets/images/bankPayment.png';
import projectImg4 from '../../assets/images/Mern discussion platform.png';

const projects = [
    {
        title: 'ForumSphere – MERN Discussion Platform',
        description: 'A community-driven discussion platform where users can share posts, vote, comment, and engage in meaningful conversations with role-based access and membership system.',
        features: [
            'Upvote/Downvote system for posts',
            'Commenting on posts',
            'Role-based access control (Admin & User)',
            'Membership system with Stripe payment integration',
        ],
        techs: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS', 'DaisyUI', 'Stripe'],
        githubLinks: {
            client: 'https://github.com/ChakmaShantunu/mern-discussion-platform-client.git',
            server: 'https://github.com/ChakmaShantunu/mern-discussion-platform-server.git',
        },
        liveUrl: 'https://react-mern-discussion-platform.web.app/',
        image: projectImg4,
    },
    {
        title: 'SocialConnect – Social Event Platform',
        description: 'A platform to create, discover, and join social development events with community engagement.',
        features: [
            'Event creation and management',
            'User registration and participation',
            'Real-time notifications and updates',
        ],
        techs: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        githubLinks: {
            client: 'https://github.com/ChakmaShantunu/Social-Development-Events-Client.git',
            server: 'https://github.com/ChakmaShantunu/Social-Development-Events-Server.git',
        },
        liveUrl: 'https://social-event-platform-8f1fd.web.app/',
        image: projectImg1,
    },
    {
        title: 'TaskHub – Freelance Platform',
        description: 'A full-stack platform where clients can post tasks and freelancers can bid, complete, and get paid.',
        features: [
            'Secure authentication & role-based access',
            'Task bidding, completion & reviews',
            'Responsive dashboard for client & freelancer',
        ],
        techs: ['React', 'Node Js', 'Express', 'MongoDb', 'Firebase', 'Tailwind CSS'],
        githubLinks: {
            client: 'https://github.com/ChakmaShantunu/freelancing-platform-client.git',
            server: 'https://github.com/ChakmaShantunu/freelancing-platform-server.git',
        },
        liveUrl: 'https://freelance-marketplace-app.web.app/',
        image: projectImg2,
    },
    {
        title: 'BankPay – Bank Payment System',
        description: 'A secure online banking payment system with transaction management and user authentication.',
        features: [
            'Secure fund transfers',
            'Transaction history and reports',
            'Multi-factor authentication',
        ],
        techs: ['React', 'firebase', 'Tailwind CSS', 'DaisyUi'],
        githubLinks: {
            client: 'https://github.com/ChakmaShantunu/Payment-Gateway.git',
            server: 'https://github.com/username/blogify-server',
        },
        liveUrl: 'https://merigold-auth.web.app/',
        image: projectImg3,
    },


];


const Projects = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16" id="projects" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-primary">Projects</h2>
            <div className="h-2 border border-gray-200 rounded w-18 bg-primary mb-12 mt-2"></div>

            <div className="flex flex-col gap-10">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
