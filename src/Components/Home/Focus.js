import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './Home.css';
import computer from '../../images/macBook1.png';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

const Focus = () => {
    return (
        <section className = "themeBg2">
        <div className="container pt-5">
            <div className="row py-5">
                <Fade left>
                    <div className="col-md-6 pt-5 ">
                        <img src={computer} alt="" className="w-100" />
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-md-6  pt-5 focus-content">
                        <small> <i>Our Major focus on</i> </small>
                        <h3 className="themeTitle py-3">Software Development</h3>
                        <p>We go above and Beyond to making your ideas ready for Industry Revolution</p>
                        <ul>
                            <li><BsFillArrowRightCircleFill /> We belive in quality feature rather than extra features.</li>
                            <li><BsFillArrowRightCircleFill /> High-quality IT Services For the Budget Conscious.</li>
                            <li><BsFillArrowRightCircleFill /> Managing the Time is our another goals
                            </li>
                        </ul>
                    </div>
                </Fade>
            </div>
            </div>
        </section>
    );
};

export default Focus;