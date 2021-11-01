import React from 'react';
import './Home.css';
import HomeHero from '../../images/hero.jpg';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

const Hero = () => {
    return (
        <div className="HomeHero">
            {/* <img src={HomeHero} alt="" /> */}
            <div className="hero-content">
                <Fade top>
                    <h1>High Quality IT Service</h1>
                </Fade>
                <h4>For the budget Conscious</h4>
                <Flash>
                    {/* <p>Learn how to create a React Navbar Menu in this beginner React JS project tutorial.</p> */}
                </Flash>
                <button className="themeBtn">Our Projects</button>
            </div>
        </div>
    );
};

export default Hero;