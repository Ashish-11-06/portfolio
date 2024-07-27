import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

function Header(){
    return(
        <header className="Header">
            <nav>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><Link to="/contact">contacts</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;