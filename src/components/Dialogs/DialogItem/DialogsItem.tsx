import React from "react";
import {NavLink} from "react-router-dom";
import s from 'components/Dialogs/Dialogs/Dialogs.module.css';


type DialogsPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogsPropsType) => {
    const {name, id} = props
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={name === 'Andrew' ? s.active : ''}>{name}</NavLink>
        </div>
    )
}

