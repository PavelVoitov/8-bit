import preloader from "../../../assets/images/Bean Eater-1.2s-211px.svg";
import React from "react";
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.loader}>
            <img src={preloader} alt={'Loading...'}/>
        </div>
    )
}