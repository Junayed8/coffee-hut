import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='text-center mt-5'>
            <p>copyright @ {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;