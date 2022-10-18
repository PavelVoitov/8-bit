import React from 'react';
import c from './Header.module.css'

export const Header = () => {
    return (
        <header className={c.header}>
            <img src={require('../imges/logo.png')} alt="header"/>
            <span className={c.title}>8-bit</span>
        </header>
    )
}

