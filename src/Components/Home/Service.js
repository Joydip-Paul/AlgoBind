import React from 'react';
import { AiFillAndroid, AiOutlineAndroid } from 'react-icons/ai';
import { GiSpiderWeb, GiPencilRuler } from 'react-icons/gi';
import { FaPencilRuler } from 'react-icons/fa';
import { GrAppleAppStore } from 'react-icons/gr';
import { AiOutlineBug } from 'react-icons/ai';
import './Home.css';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
const Data = [
    { title: "Android Development", desc: "We create Mobile Apps, polished and functional websites and software products for startups, agencies and enterprises.", icon: <AiOutlineAndroid />, link: "/contact" },
    { title: "Web Devlopment", desc: "Our skilled and dedicated web development team understands your needs and leverage the dynamism of modern web frameworks to create business valued web applications..", icon: <GiSpiderWeb />, link: "#contact" },
    { title: "Flutter Development", desc: "Our expertise in custom mobile app development gives our clients the opportunity to pack incredible functionality into their customer’s hands.", icon: <GrAppleAppStore />, link: "" },
    { title: "Academy", desc: "With AlgoBind Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student and solve their problems.", icon: <GiPencilRuler />, link: "" },
]

const Service = () => {
    return (
        <section className="themeBg2">
            <div className="container">
                <div className="row g-5 py-5">
                    <h2 className="themeTitle text-center">Our Services</h2>
                    {
                        Data.map((item) => (

                            <Fade bottom>
                                <div className="col-lg-6">
                                    <div className="CardBox px-5 py-5">
                                        <small>{item.icon}</small>
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                        <Flash>
                                            <a href="#contact" className="themeBtn2 text-decoration-none">book now</a>
                                        </Flash>
                                    </div>
                                </div>
                            </Fade>
                        ))
                    }
                </div>
            </div >
        </section>
    );
};

export default Service;