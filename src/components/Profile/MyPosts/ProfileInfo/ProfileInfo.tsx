import React from "react";
import c from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <img className={c.fon} src={require('../../../../assets/images/kosmos.png')} alt="rockets"/>
            <div className={c.description}>
                <img className={c.avatar} src={require('../../../../assets/images/avatar1.png')} alt="avatar"/>
                description
            </div>
        </div>
    )
}