import React from 'react';
import mobile1 from '../../images/android.jpg';
import mobile2 from '../../images/android2.jpg';
import './Portfolio.css';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

const MobileData = [
    { img: mobile1, title: "Joydip App" },
    { img: mobile2, title: "Joydip App" },
]

const Mobile = () => {
    return (
        <section id= "portfolio">
            <div className="container">
                <div className="row g-4 pt-5 d-flex justify-content-center">
                    {
                        MobileData.map((mobile) => (
                            <Fade bottom>
                                <div className="col-md-6" key={mobile.title}>
                                    <div className="projects-card">
                                        <img src={mobile.img} alt="" className="w-100" />
                                        <div className="project-content">
                                            <h2>{mobile.title}</h2>
                                            <p>Okay Bye</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Mobile;