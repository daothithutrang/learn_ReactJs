import React from "react";
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-left'>
                Logo
            </div>
            <div className='header-right'>
                <div className='menu'>Menu</div>
                <div className='about'>About</div>
                <div className='contact'>Contact</div>
                <div className='sign-up'>Sign-up</div>
                <div className='sign-in'>Sign-in</div>
            </div>
        </header>
    );
}

export default Header;