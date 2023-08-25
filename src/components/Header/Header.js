import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <a href="#">PlayersDraft</a>
            </div>
            <div className="header-right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;