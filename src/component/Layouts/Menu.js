import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({render,setRender}) => {
    return (
        <div className="navbar">
            <Link className="menu-btn" to="/" onClick={()=>setRender(false)}>Home</Link>
            <Link className="menu-btn" to="/about" onClick={()=>setRender(false)}>About</Link>
            <Link className="menu-btn" to="/services" onClick={()=>setRender(false)}>Service</Link>
            <Link className="menu-btn" to="/projects" onClick={()=>setRender(false)}>Projects</Link>
            <Link className="menu-btn" to="/contact" onClick={()=>setRender(false)}>Contact</Link>
        </div>
    )
}

export default Menu
