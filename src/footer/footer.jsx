import React from 'react';
import './footer.scss';
import frMessages from '../Frmessages/frmessages';

const Footer = () => {
    return (
        <footer className="tourdefarce-footer">
            <div className="footer-content">
                <p>{frMessages.footer.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
