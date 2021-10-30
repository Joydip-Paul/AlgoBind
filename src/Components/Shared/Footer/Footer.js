import React from 'react';
import './Footer.css';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillSkype, AiFillBehanceSquare } from 'react-icons/ai';
const footerCol1 = [
    { link: "About  Us",  url: "/about-us"},
    { link: "Contact Us",  url: "/about-us"},
    { link: "Our Gallery",  url: "/about-us"},
    { link: "Our Team",  url: "/about-us"}
]

const footerCol2 = [
    { link: "Mobile App" ,  url: "/about-us" },
    { link: "WEb Services" ,  url: "/about-us" },
    { link: "Ui/Ux Design" ,  url: "/about-us" },
    { link: "Graphics Design" ,  url: "/about-us" }
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
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h2>AlgoBind</h2>
                        <p className = "w-75">React Navbar Menu in this beginner React JS project tutorial. We will make a navigation menu that slides ou</p>
                        <div className = "pb-5">
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

                <div className="sub-footer pt-5">
                    <p>copyright &copy;2021 algobind</p>
                    <p className = "privacy-title mx-4">Terms and Condition. privacy policy.</p>
                </div>

            </div>
        </section>
    );
};

export default Footer;