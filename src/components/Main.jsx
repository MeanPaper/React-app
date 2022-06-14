import React from 'react';
import React_Icon_Large from '../images/react-icon-large.png';

const Main = () => {
    return (
    <div className = 'content'>
        <h1>Fun facts about React</h1>
        <ul className = 'content-unordered-list'>
            <li><span>Was first released in 2013</span></li>
            <li><span>Was originally created by Jordan Walke</span></li>
            <li><span>Has well over 100K stars on GitHub</span></li>
            <li><span>Is maintained by Facebook</span></li>
            <li><span>Power thousands of enterprise apps, including mobile apps</span></li>
        </ul>
        <img className = 'content-img' src = {React_Icon_Large} alt = 'large semi react icon' />
    </div>);
};

export default Main;
