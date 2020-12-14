import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="navbar">
            <Link className="menu-btn" to="/">Home</Link>
            <Link className="menu-btn" to="/about">About</Link>
            <Link className="menu-btn" to="/services">Service</Link>
            <Link className="menu-btn" to="/projects">Projects</Link>
            <Link className="menu-btn" to="/contact">Contact</Link>
        </div>
    )
}

export default Menu
