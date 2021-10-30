import React from 'react';
import './Home.css';
import HomeHero from '../../images/hero.jpg';

const Hero = () => {
    return (
        <div className = "HomeHero">
            {/* <img src={HomeHero} alt="" /> */}
            <div className="hero-content">
                <h1>Hight Quality IT Service</h1>
                <h4>For the budget Conscious</h4>
                <p>Learn how to create a React Navbar Menu in this beginner React JS project tutorial. We will make a navigation menu that slides out into a sidebar and utilities a hamburger menu icon that you can toggle on and off to open the menu. The navbar will be a navbar component and will include all the props and functions.</p>
                <button className= "themeBtn">Our Projects</button>
            </div>
        </div>
    );
};

export default Hero;