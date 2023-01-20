import React from 'react';
import fdPhoto from "../../assets/small/fd-photo.jpg";

function About() {
    return (
        <section>
            <div class="container justify-content-center">
                <div class="d-flex flex-row justify-content-center">
                    <img class="rounded-circle img-fluid border shadow-sm d-flex flex-column profilePic" src={fdPhoto} alt="Fidel" />
                </div>
                <div class="d-flex flex-row">
                    <p class="fw-light d-flex flex-column aboutText">Hi, my name is Fidel. I'm originally from Mexico, but have called Houston, Texas my home for most of my life. I am a Full-Stack Web Developer with a background in teaching and management. My background as an educator allowed me to make meaningful contributions to young minds, and through collaborating, mentoring and coaching other educators, I have developed a refined set of soft skills. I am a strong believer in the power lifelong learning and curiosity for technology, which is what led me to pursue Web Development. I recently graduated from Rice University's Full-Stack Web Development Bootcamp and have honed the skills needed to create, develop, and maintain websites from start to finish. I am passionate about promoting diversity, equity, and inclusion, and in my free time, I enjoy outdoor activities such as hiking, biking, and gardening. I look forward to connecting with you!</p>
                </div>
            </div>
        </section>
    );
}

export default About;

