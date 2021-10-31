import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn.pixabay.com/photo/2012/04/26/13/58/playboy-42527_1280.png" alt="logo"/>
        </header>
    )

}

export default Header;