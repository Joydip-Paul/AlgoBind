import React from 'react';
import Banner from '../Shared/Banner/Banner';
import banner from '../../images/banner.jpg';
import Fade from 'react-reveal/Fade';
import './Contact.css';

const Contact = () => {
    return (
        <div id = "contact" className = "py-5">
            {/* <Banner
                bannerImg={banner}
                bannerTitle="Contact"
            /> */}

            <h1 className = "text-center themeTitle">GOT SOME GREAT IDEAS TO START WITH</h1>
            <div className="row  border-dark py-5 mx-auto d-flex justify-content-center">
                <Fade left>
                    <div className="col-md-5 p-4">
                        

                        <form action="" className="contact-form">
                            <input type="text" placeholder="Your Name" className="w-100 p-3" />
                            <input
                                type="email"
                                placeholder="Your Email"
                                name=""
                                id=""
                                className="w-100 my-4 p-3"
                            />
                            <textarea name="" id="" rows="8" className="w-100 p-3">
                                Your Message
                            </textarea>
                            <input type="button" value="Submit" className="submitBtn mt-3" />
                        </form>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-md-5 p-4">

                        <div className="Contact-area">
                            <div className = "single-contact">
                                <p>Phone: 01712345678</p>

                                <p>Address: Sylhet, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    );
};

export default Contact;