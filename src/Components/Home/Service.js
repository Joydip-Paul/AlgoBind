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
    { title: "Android Development", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.", icon: <AiOutlineAndroid />, link: "/contact" },
    { title: "Web Devlopment", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.", icon: <GiSpiderWeb />, link: "" },
    { title: "IOS Development", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.", icon: <GrAppleAppStore />, link: "" },
    { title: "Academy", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.", icon: <GiPencilRuler />, link: "" },
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
                                            <a href={item.link} className="themeBtn2 text-decoration-none">book now</a>
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