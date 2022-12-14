import React from 'react';
import c from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={c.header}>
            <div className={c.headerBlockImg}>
                <img src={require('../../assets/images/logo.png')} alt="header"/>
            </div>
            <div className={c.headerBlockSpan}>
                <span className={c.title}>8-bit</span>
            </div>
            <div className={c.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}<button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>

        </header>
    )
}

