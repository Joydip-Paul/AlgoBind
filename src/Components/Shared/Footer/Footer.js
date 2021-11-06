import React from 'react';
import './Footer.css';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillSkype, AiFillBehanceSquare } from 'react-icons/ai';
const footerCol1 = [
    { link: "About  Us",  url: ""},
    { link: "Contact Us",  url: ""},
    { link: "Our Team",  url: ""}
]

const footerCol2 = [
    { link: "Mobile App" ,  url: "" },
    { link: "Web Services" ,  url: "" },
    { link: "Ui/Ux Design" ,  url: "" },
    { link: "Academy", url: "" },
]

const socialIcon = [
    { icon: <AiFillFacebook />},
    { icon: <AiFillInstagram  />},
    { icon: <AiFillLinkedin  />},
    { icon: <AiFillTwitterSquare  />},
]

const Footer = () => {
    return (
        <section className="themeBg footer-area">
            <div className="container-fluid">
                <div className="row mx-4">
                    <div className="col-md-6 col-sm-12">
                        <h2>AlgoBind</h2>
                        <p className="w-75">We help you to create diverse and complex software solutions for your needs and implement and create custom software solutions from scratch.</p> <br/>

                        <div className = "address">
                            <p>Office: Sylhet, Bangladesh</p>
                            <a href="mailto: algobind@gmail.com" className="text-decoration-none text-white">Email: algobind@gmail.com</a> <br/>
                            <a href="tel:+8801710348557" className="text-decoration-none text-white">WhatsApp: +88 01710348557</a>
                        </div>
                        <div className = "pb-5 icon">
                            {socialIcon.map((item) => (
                                <a href="#" className="social-icon">{item.icon}</a>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4 className="footer-title">Our Services</h4>
                        {footerCol2.map((item) => (
                            <ul>
                                <li><a href={item.url}>{item.link}</a></li>
                            </ul>
                        ))}
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4 className="footer-title">Quick Links</h4>
                        {footerCol1.map((item) => (
                            <ul>
                                <li><a href={item.url}>{item.link}</a></li>
                            </ul>
                        ))}
                    </div>

                </div>

                <div className="sub-footer pt-5 mx-4">
                    <p>copyright &copy;2021 algobind</p>
                </div>

            </div>
        </section>
    );
};

export default Footer;