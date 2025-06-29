import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiX } from 'react-icons/fi';

const ProjectCard = ({ title, description, features, techs, githubLinks, liveUrl, image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center gap-6 bg-base-100 border border-base-300 rounded-2xl p-6 shadow-md" data-aos="fade-up">

                {/* Left: Image */}
                <div className="flex-1 max-w-full md:max-w-md h-auto md:h-96 overflow-hidden rounded-xl overflow-y-auto">
                    <img src={image} alt={title} className="rounded-xl w-full object-cover" />
                </div>

                {/* Right: Info */}
                <div className="flex-1 space-y-4 text-base-content">
                    <h3 className="text-2xl font-semibold text-primary">{title}</h3>
                    <p className="text-base-content text-opacity-80">{description}</p>

                    {/* Features */}
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        {features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {techs.map((tech, i) => (
                            <span key={i} className="badge badge-outline badge-sm">{tech}</span>
                        ))}
                    </div>



                    {/* Buttons */}
                    <div className="mt-4 flex flex-wrap gap-4">

                        {/* Live Preview */}
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                                Live Site
                            </a>
                        )}
                        {/* GitHub Dropdown */}
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-outline btn-sm flex items-center gap-2 cursor-pointer">
                                <FaGithub /> GitHub
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border border-base-300 rounded-box w-44">
                                {githubLinks.client && (
                                    <li>
                                        <a href={githubLinks.client} target="_blank" rel="noreferrer">Client Repo</a>
                                    </li>
                                )}
                                {githubLinks.server && (
                                    <li>
                                        <a href={githubLinks.server} target="_blank" rel="noreferrer">Server Repo</a>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* Live Site */}
                        {liveUrl && (
                            <button
                                onClick={openModal}
                                className="btn btn-primary btn-sm flex items-center gap-2"
                            >
                                <FiExternalLink /> View Project
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-base-100 rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-2xl hover:text-primary"
                            aria-label="Close modal"
                        >
                            <FiX />
                        </button>

                        <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>
                        <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
                        <p className="mb-4 text-base-content text-opacity-80">{description}</p>

                        <h3 className="text-xl font-semibold mb-2">Features</h3>
                        <ul className="list-disc pl-6 mb-4">
                            {features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {techs.map((tech, i) => (
                                <span key={i} className="badge badge-outline">{tech}</span>
                            ))}
                        </div>

                        <div className="mt-6 flex gap-4">
                            {githubLinks.client && (
                                <a href={githubLinks.client} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                                    Client Repo
                                </a>
                            )}
                            {githubLinks.server && (
                                <a href={githubLinks.server} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                                    Server Repo
                                </a>
                            )}
                            {/* Live Preview */}
                            {liveUrl && (
                                <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                                    Live Site
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
