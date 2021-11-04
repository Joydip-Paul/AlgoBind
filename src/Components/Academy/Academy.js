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
                                    <div>
                                        <p>Type: Beginner to Intermediate</p>
                                        <p>Tell: +8801710348557</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-6">
                            <div className="single-academy">
                                <img src={academy} alt="" />
                                <div className="academy-content">
                                    <h2>Flutter Development</h2>
                                    <div>
                                        <p>Type: Beginner to Intermediate</p>
                                        <p>Tell: +8801710348557</p>
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