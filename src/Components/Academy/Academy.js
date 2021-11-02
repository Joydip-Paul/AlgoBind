import React from 'react';
import './Academy.css';
import academy from '../../images/aca.jpg';
import Fade from 'react-reveal/Fade';

const Academy = () => {
    return (
        <div id="academy">
            <h2 className="themeTitle text-center">Academic Course</h2>
            <div className="container py-5">
                <div className="row g-5">
                    <Fade left>
                        <div className="col-md-6">
                            <div className="single-academy">
                                <img src={academy} alt="" />
                                <div className="academy-content">
                                    <h2>Android Development</h2>
                                    <p>Type: Beginner to Intermediate</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-6">
                            <div className="single-academy">
                                <img src={academy} alt="" />
                                <div className="academy-content">
                                    <h2>Android Development</h2>
                                    <p>Type: Beginner to Intermediate</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Academy;