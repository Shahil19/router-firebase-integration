import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link className='link' to={`/`}>Home</Link>
                <Link className='link' to={`/login`}>Login</Link>
            </nav>
        </div>
    );
};

export default Header;