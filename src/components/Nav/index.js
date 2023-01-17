import React, { useState } from 'react';
// import logo from "../../assets/small/logo.png";


function Nav(props) {

    // function colorChange() {
    //     setCurrentComponent('About')
    //     console.log("Nav Color Changed")
    // }

    const [currentComponent, setCurrentComponent] = useState('About');


    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bsNav">
                <a class="navbar-brand aBrandStyles" href="#">Fidel Deaquino</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navbar-links navcol-1" id="navbarNav">
                    <ul className="navbar-nav d-lg-flex ms-auto justify-content-lg-end align-items-lg-start" id="navFlexEnd">
                        <li className="nav-item nav-link nav-item-styles">
                            {currentComponent === 'About' ? (
                                <button className='rounded' style={{ background: '#BEA368ff' }}><a href='#about'>About</a></button>
                            ) : (
                                <a style={{ color: 'white' }} href='#about' onClick={() => {
                                    setCurrentComponent('About')
                                    props.setCurrentPage('About')
                                }}>About</a>
                            )}
                        </li>
                        <li class="nav-item nav-link nav-item-styles">
                            {currentComponent === 'Portfolio' ? (
                                <button className='rounded' style={{ background: '#BEA368ff' }}><a href='#portfolio'>Portfolio</a></button>
                            ) : (
                                <a style={{ color: 'white' }} href='#portfolio' onClick={() => {
                                    setCurrentComponent('Portfolio')
                                    props.setCurrentPage('Portfolio')
                                }}>Portfolio</a>
                            )}
                        </li>
                        <li class="nav-item nav-link nav-item-styles">
                            {currentComponent === 'ContactForm' ? (
                                <button className='rounded' style={{ background: '#BEA368ff' }}><a href='#contact'>Contact</a></button>
                            ) : (
                                <a style={{ color: 'white' }} href='#contact' onClick={() => {
                                    setCurrentComponent('ContactForm')
                                    props.setCurrentPage('ContactForm')
                                }}>Contact</a>
                            )}
                        </li>
                        <li class="nav-item nav-link nav-item-styles">
                            {currentComponent === 'Resume' ? (
                                <button className='rounded' style={{ background: '#BEA368ff' }}><a href='#resume'>Resume</a></button>
                            ) : (
                                <a style={{ color: 'white' }} href='#resume' onClick={() => {
                                    setCurrentComponent('Resume')
                                    props.setCurrentPage('Resume')
                                }}>Resume</a>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <nav className='navbar navbar-light navbar-expand-md bsNav'>
                <div className='container-fluid nav-elements'>
                    <h1 className='navbar-brand aBrandStyles'>
                        Fidel Deaquino
                    </h1>
                    <button className="navbar-toggler button-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                        <span className="visually-hidden"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navcol-1" className="collapse navbar-collapse nav-color navbar-links">
                        <ul className="navbar-nav d-lg-flex ms-auto justify-content-lg-end align-items-lg-start" id="navFlexEnd">
                            <li className="nav-item nav-link nav-item-styles">
                                {currentComponent === 'About' ? (
                                    <button className='rounded' style={{ background: '#BEA368ff' }}><a href='#about'>About</a></button>
                                ) : (
                                    <a style={{ color: 'white' }} href='#about' onClick={() => {
                                        setCurrentComponent('About')
                                        props.setCurrentPage('About')
                                    }}>About</a>
                                )}
                            </li>
                            <li class="nav-item nav-link nav-item-styles">
                                {currentComponent === 'Portfolio' ? (
                                    <button className='rounded' style={{ background: '#BEA368ff' }}><a href='#portfolio'>Portfolio</a></button>
                                ) : (
                                    <a style={{ color: 'white' }} href='#portfolio' onClick={() => {
                                        setCurrentComponent('Portfolio')
                                        props.setCurrentPage('Portfolio')
                                    }}>Portfolio</a>
                                )}
                            </li>
                            <li class="nav-item nav-link nav-item-styles">
                                {currentComponent === 'ContactForm' ? (
                                    <button className='rounded' style={{ background: '#BEA368ff' }}><a href='#contact'>Contact</a></button>
                                ) : (
                                    <a style={{ color: 'white' }} href='#contact' onClick={() => {
                                        setCurrentComponent('ContactForm')
                                        props.setCurrentPage('ContactForm')
                                    }}>Contact</a>
                                )}
                            </li>
                            <li class="nav-item nav-link nav-item-styles">
                                {currentComponent === 'Resume' ? (
                                    <button className='rounded' style={{ background: '#BEA368ff' }}><a href='#resume'>Resume</a></button>
                                ) : (
                                    <a style={{ color: 'white' }} href='#resume' onClick={() => {
                                        setCurrentComponent('Resume')
                                        props.setCurrentPage('Resume')
                                    }}>Resume</a>
                                )}
                                </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </header>
    );
}

// const projects = [
//     {
//         name: "Byte Farmer's Market",
//         description:
//             "A digital marketplace for local businesses to launch their store and display their products. Users can create a store profile with associated products, as well as vote on their favorite products.",
//     },
//     {
//         name: "Tempo Run", description: "A search engine that suggests songs with a certain Beat Per Minute (BPM).",
//     },
//     {
//         name: "Taskmaster Pro", description: "A Progressive Web App that allows users to organize their workflow, Kanban style."
//     },
//     {
//         name: "Weather Dashboard",
//         description: "An application that allows users to search the weather for a given city."
//     },
//     {
//         name: "Pizza Hunt",
//         description: "A social media recipe app where users can post creative spins on pizza, and connect with each other based on their love of pizza."
//     }
// ];

export default Nav;