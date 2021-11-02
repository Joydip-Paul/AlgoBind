import React from 'react';
import web1 from '../../images/web.png';
import web2 from '../../images/web2.png';
import './Portfolio.css';
const WebData = [
    { img: web1, title: "Joydip App" },
    { img: web2, title: "Joydip App" },
]

const Web = () => {
    return (
        <section id= "portfolio">
            <div className="container">
                <div className="row g-4 pt-5 justify-content-center">
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
        </section>
    );
};

export default Web;