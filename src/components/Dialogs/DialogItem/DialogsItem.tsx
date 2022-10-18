import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';


type DialogsPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogsPropsType) => {
    const {name, id} = props
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

