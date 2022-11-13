import React from 'react';
import c from './Header.module.css'

export const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.headerBlockImg}>
                <img src={require('../../assets/images/logo.png')} alt="header"/>
            </div>
            <div className={c.headerBlockSpan}>
                <span className={c.title}>8-bit</span>
            </div>

        </header>
    )
}

