import React from 'react';
import './Academy.css';
import Fade from 'react-reveal/Fade';

import Android from '../../images/AndroidNew1.png';
import Flutter from '../../images/FlutterNew.png';

const Academy = () => {
    return (
        <div id="academy" className = "py-5">
            <h2 className="themeTitle text-center pt-5">Academic Course</h2>
            <div className="container py-5">
                <div className="row g-5">
                    <Fade left>
                        <div className="col-md-6">
                            <div className="single-academy">
                                <img src={Android} alt="" />
                                <div className="academy-content">
                                    <h2>Android Development</h2>
                                    <div>
                                        <p>Type: Beginner to Intermediate</p>
                                        <a href="tel:+8801710348557" className="call">Tell: +88 01710348557</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-6">
                            <div className="single-academy">
                                <img src={Flutter} alt="" />
                                <div className="academy-content">
                                    <h2>Flutter Development</h2>
                                    <div>
                                        <p>Type: Beginner to Intermediate</p>
                                        <a href="tel:+8801710348557" className = "call">Tell: +88 01710348557</a>
                                    </div>
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