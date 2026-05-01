import React, { useState, useEffect } from 'react';

import '../style/header.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: "smooth"});
        }
    }

    const menu = ["Home", "About", "Projects", "Skills", "Contact"]

    return (
        <header className={`header ${isScrolled ? 'on' : ''}`}>
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