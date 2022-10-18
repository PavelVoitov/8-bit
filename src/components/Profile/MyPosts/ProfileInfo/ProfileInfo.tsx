import React from "react";
import c from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <img className={c.fon} src={require('../../../imges/kosmos.png')} alt="rockets"/>
            <div className={c.description}>
                <img className={c.avatar} src={require('../../../imges/avatar1.png')}/>
                description
            </div>
        </div>
    )
}