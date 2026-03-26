import React from 'react';
import { useState, useEffect } from 'react';
import '../style/header.scss';

const Header = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: "smooth"});
        }
    }

    const menu = ["Home", "Profile", "Skills", "Projects"]

    return (
        <header className='header'>
            <div className='inner'>
                <h1>seyeon</h1>
                <ul>
                    {menu.map((item)=>(
                        <li key={item} onClick={()=> scrollToSection(item)}>{item}</li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;