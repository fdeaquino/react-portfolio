import React, { useState } from 'react';
import logo from "../../assets/small/logo.png";


function Nav() {
    const projects = [
        {
            name: "Byte Farmer's Market",
            description:
                "A digital marketplace for local businesses to launch their store and display their products. Users can create a store profile with associated products, as well as vote on their favorite products.",
        },
        {
            name: "Tempo Run", description: "A search engine that suggests songs with a certain Beat Per Minute (BPM).",
        },
        {
            name: "Taskmaster Pro", description: "A Progressive Web App that allows users to organize their workflow, Kanban style."
        },
        {
            name: "Weather Dashboard",
            description: "An application that allows users to search the weather for a given city."
        },
        {
            name: "Pizza Hunt",
            description: "A social media recipe app where users can post creative spins on pizza, and connect with each other based on their love of pizza."
        }
    ];


    return (
        <header className="flex-row px-1">
            <h2>
                <a href='/'>
                    <span><img alt='logo' src={logo} style={{ width: "5%" }} /></span> Fidel Deaquino
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>About Me</a>
                    </li>
                    <li className='mx-2'>
                        <a href='#portfolio'>Portfolio</a>
                    </li>
                    <li className='mx-2'>
                        <span>Contact</span>
                    </li>
                    <li className='mx-2'>
                        <a href='#resume'>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;