import React, { Component} from 'react';
import './Navbar.css';
import { MenuItem } from './MenuItem';
import { NavItem } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {
        return (
            <nav className = "NavbarItems fixed-top">
                <h4 className = "logo">AlgoBind</h4>
                <div className="menu-icon" onClick={this.handleClick}>
                    <h4>{this.state.clicked ? <GrFormClose className="close"/> : <GiHamburgerMenu />}</h4>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItem.map((item,index) => {
                        return (
                            <li key = {index}>
                                <a href={item.url} className={item.cName}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
};

export default Navbar;