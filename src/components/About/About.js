import React from 'react';
import './About.css';
import car from '../../images/bgAbout.jpg'
import Skill from '../Skills/Skill';
const About = () => {
    return (
        <div id="about" className="about" styles={{ backgroundImage:`url(${car})`}} >
            <h1 className="text-about">About Me</h1>
            <div className="about-text">
            <h2>Hi, I’m Mehraj. Nice to meet you.</h2>
            <p>Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
            </div>
            <Skill></Skill>
        </div>
    );
};

export default About;