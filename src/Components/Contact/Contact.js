import React from 'react';
import Banner from '../Shared/Banner/Banner';
import banner from '../../images/banner.jpg';
import Fade from 'react-reveal/Fade';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm("xqkwvqzo"); // don't change this id
    if (state.succeeded) {
        alert("success");
         return <div className="text-center success-card mt-5 px-4 themeBg text-white pb-5 pt-5 theme-color">Thanks for your inquiry. We will response you as soon as possible. Wish you all the best. </div>;
    }
    return (
        <div id="contact" className="py-5">
            {/* <Banner
                bannerImg={banner}
                bannerTitle="Contact"
            /> */}

            <div className="text-center">
                <h1 className="themeTitle">GOT ANY IDEA?</h1>
                <h3>BUILD WITH US</h3>
            </div>
            <div className="row  border-dark py-5 mx-auto d-flex justify-content-center">
                <Fade left>
                    <div className="col-md-5 p-4">


                        <form action="https://formspree.io/f/xqkwvqzo"
                            method="POST" className="contact-form"
                        >
                            <input type="text" name = "name" placeholder="Your Name" className="w-100 p-3"  required="required"/>
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                id=""
                                className="w-100 my-4 p-3" required="required"
                            />
                            <textarea id="" rows="8" className="w-100 p-3" name="message" required="required">
                                Your Message
                            </textarea>
                            <button type="submit" className="submitBtn mt-3">Send</button>
                            {/* <input type="button" value="Submit" className="submitBtn mt-3" /> */}
                        </form>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-md-5 p-4">

                        <div className="Contact-area">
                            <div className="single-contact">
                                <p>Phone: +8801710348557</p>

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