import React from 'react';
import fdPhoto from "../../assets/small/fd-photo.jpg";

function About() {
    return (
        <section>
            <div className="container justify-content-center">
                <div className="d-flex flex-row justify-content-center">
                    <img className="rounded-circle img-fluid border shadow-sm d-flex flex-column profilePic" src={fdPhoto} alt="Fidel" />
                </div>
                <div className="d-flex flex-row">
                    <p className="fw-light d-flex flex-column aboutText">Hi, my name is Fidel. I am a Full-Stack Web Developer with a background in teaching and management. I am originally from Mexico, but have called Houston, TX home for most of my life. As an educator, I was able to make a positive impact on young minds and developed strong soft skills through collaboration, mentorship, and coaching other educators. I am a strong advocate for lifelong learning and I'm always seeking new challenges in technology. This led me to pursue web development, where I discovered my passion for its creative and constantly evolving nature.</p>
                    <p className="fw-light d-flex flex-column aboutText">I recently completed Rice University's Full-Stack Web Development Bootcamp, where I honed my skills in creating, developing, and maintaining websites from start to finish. In my future roles, I hope to work in environments that offer opportunities for creative expression and mentorship. Having a mentor who can guide me and help me grow will be essential in achieving my professional goals.</p>
                    <p className="fw-light d-flex flex-column aboutText">I am passionate about promoting diversity, equity, and inclusion, and in my free time, I enjoy outdoor activities such as hiking, biking, and gardening. I look forward to connecting with you!</p>
                </div>
            </div>
        </section>
    );
}

export default About;

