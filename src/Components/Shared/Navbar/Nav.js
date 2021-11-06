import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { MenuItem } from './MenuItem';
import { NavItem } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 80) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    let navbarClasses = ["NavbarItems", "fixed-top"];
    if (scrolled) {
        navbarClasses.push("scrolled");
    }

    return (
        <nav className={navbarClasses.join(" ")}>
            <a href="/" className="logo">Algobind</a>
            <div className="menu-icon" onClick={handleClick}>
                <h4>{click ? <MdClose className="close" /> : <GiHamburgerMenu />}</h4>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                {MenuItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Nav;