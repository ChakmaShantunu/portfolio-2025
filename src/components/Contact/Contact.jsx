import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        const email = 'chakmashantunu.web@gmail.com';
        const subjectText = encodeURIComponent(subject);
        const bodyText = encodeURIComponent(message);

        // Gmail compose link
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subjectText}&body=${bodyText}`;

        window.open(gmailLink, '_blank');
    };
    return (
        <section className="max-w-5xl mx-auto px-6 py-16" id="contact" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-primary mb-2">Contact Me</h2>
            <div className='h-2 border border-gray-200 rounded w-18 bg-primary mb-12'></div>

            <div className="bg-base-100 border border-base-300 shadow-md rounded-2xl p-6 lg:p-10 flex flex-col lg:flex-row gap-8 justify-center items-center">

                {/* Left Side: Contact Info */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                        <FaPhone className="text-xl text-primary" />
                        <span className="text-base-content">+8801977846041</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaWhatsapp className="text-xl text-primary" />
                        <span className="text-base-content">+8801518313916</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-xl text-primary" />
                        <span className="text-base-content">chakmashantunu.web@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-xl text-primary" />
                        <span className="text-base-content">Rangamati, Bangladesh</span>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 space-y-4">
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter subject/title"
                        className="input input-bordered w-full"
                    />
                    <textarea
                        className="textarea textarea-bordered w-full h-40"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                    ></textarea>
                    <button onClick={handleSubmit} className="btn btn-primary">Send Email</button>
                </div>

            </div>
        </section>
    );
};

export default Contact;
