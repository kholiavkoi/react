import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://cdn.pixabay.com/photo/2012/04/26/13/58/playboy-42527_1280.png" alt="logo"/>


            <div className={s.userLogin}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>


        </header>
    )

}

export default Header;