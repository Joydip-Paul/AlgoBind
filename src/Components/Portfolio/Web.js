import React from 'react';
import mobile1 from '../../images/web.jpg';
import './Portfolio.css';
const WebData = [
    { img: mobile1, title: "Joydip App" },
    { img: mobile1, title: "Joydip App" },
    { img: mobile1, title: "Joydip App" },
    { img: mobile1, title: "Joydip App" },
]

const Web = () => {
    return (
        <div className="container">
            <div className="row g-4 pt-5">
                {
                    WebData.map((web) => (
                        <div className="col-md-6" key={web.title}>
                            <div className="projects-card">
                                <img src={web.img} alt="" className="w-100" />
                                <div className="project-content">
                                    <h2>{web.title}</h2>
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

export default Web;