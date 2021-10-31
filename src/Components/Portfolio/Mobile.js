import React from 'react';
import mobile1 from '../../images/project.jpg';
import './Portfolio.css';

const MobileData = [
    {img: mobile1, title: "Joydip App"},
    {img: mobile1, title: "Joydip App"},
    {img: mobile1, title: "Joydip App"},
    {img: mobile1, title: "Joydip App"},
]

const Mobile = () => {
    return (
        <div className="container">
            <div className="row g-4 pt-5">
                {
                    MobileData.map((mobile) => (
                        <div className="col-md-6" key={mobile.title}>
                            <div className="projects-card">
                                <img src={mobile.img} alt="" className="w-100" />
                                <div className="project-content">
                                    <h2>{mobile.title}</h2>
                                    <p>Okay Bye</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Mobile;