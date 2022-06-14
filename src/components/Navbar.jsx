import React from 'react';
import reactLogo from '../images/react-icon.png';

const Navbar = () => {
    return (    
    <nav className = 'navbar'>
        <img className = 'NavLogo' src = {reactLogo} alt = 'react logo'/>
        <h1> ReactFacts </h1>
        <h3> React Course - Project 1</h3>
    </nav>);
};

export default Navbar;
