import React from 'react';
import './Home.css';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="HomeHero">
            <div className="hero-content">
                <Fade top>
                    <h1>High Quality IT Service</h1>
                </Fade>
                <h4>For the budget Conscious</h4> <br />
                <Flash>
                    {/* <p>Learn how to create a React Navbar Menu in this beginner React JS project tutorial.</p> */}
                </Flash>

                <a href="#mobile" className="themeBtn text-decoration-none">Our Projects</a>
                {/* <Link to="/portfolio"><button className="themeBtn">Our Projects</button></Link> */}
            </div>
        </div>
    );
};

export default Hero;