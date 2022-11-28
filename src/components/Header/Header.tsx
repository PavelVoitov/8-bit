import React from 'react';
import c from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
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
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>

        </header>
    )
}

