import React from 'react';
import { AiFillAndroid } from 'react-icons/ai';
import './Home.css';
const Data = [
    { title: "Android/IOS App Development", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.", icon: <AiFillAndroid />, link: "/contact" },
    { title: "Web Devlopment", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.", icon: <AiFillAndroid />, link: "" },
    { title: "Ui/Ux Design", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.", icon: <AiFillAndroid />, link: "" },
    { title: "Business Analysis", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.", icon: <AiFillAndroid />, link: "" },
]

const Service = () => {
    return (
        <div className="container">
            <div className="row g-5 py-5">
                <h2 className= "themeTitle">Our Services</h2>
                {
                    Data.map((item) => (
                        
                        <div className="col-lg-6">
                            <div className="CardBox px-2 py-5">
                                <small>{item.icon}</small>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <a href = {item.link} className = "themeBtn2 text-decoration-none">view details</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;