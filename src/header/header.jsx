import React from 'react';
import './header.scss';
import frMessages from '../Frmessages/frmessages';

const Header = () => {
    return (
        <header className="tourdefarce-header">
            <div className="logo-container">
                <img src="/path/to/logo.png" alt={frMessages.header.logoAlt} />
                <h1>TourDeFarce</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#accueil">{frMessages.header.home}</a></li>
                    <li><a href="#regions">{frMessages.header.regions}</a></li>
                    <li><a href="#cliches">{frMessages.header.cliches}</a></li>
                    <li><a href="#contact">{frMessages.header.contact}</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
