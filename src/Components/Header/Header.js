import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    console.log(user);
    return (
        <div className='header'>
            <nav>
                <Link className='link' to={`/`}>Home</Link>
                <Link className='link' to={`/products`}>Products</Link>
                <Link className='link' to={`/review`}>Review</Link>
                <Link className='link' to={`/register`}>Register</Link>
                <span>{user?.displayName && user.displayName} </span>
                {
                    user?.uid ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link className='link' to={`/login`}>Login</Link>
                }
            </nav>
            <div>
                <h3>User 1. {user?.email}</h3>
            </div>
        </div>
    );
};

export default Header;