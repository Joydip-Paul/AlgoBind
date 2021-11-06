import React from 'react';
import { Link } from 'react-router-dom';
import './ContactBar.css';
import Fade from 'react-reveal/Fade';

const ContactBar = () => {
    return (
        <section className="themeBg">
            <div className="container">
                <div className="row subFooter">
                    <Fade left>
                        <div className="col-md-8">
                            <h3 className="my-auto text-uppercase mb-2">Call To Action</h3>
                            <p className="w-7">Our in-house team is yours too. We will jump in and ramp up quickly. Your goals become our goals. We will navigate the risks of software development together.</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="my-auto col-md-4">
                            <a href="#contact">contact us</a>
                            {/* <Link to="#contact"><button className="">contact us</button></Link> */}
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default ContactBar;