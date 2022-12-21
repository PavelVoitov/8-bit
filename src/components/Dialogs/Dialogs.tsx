import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./Message/MessageItem";
import {MessageInput} from "./MessageInput/MessageInput";
import {DialogsPropsType} from "./DialogsContainer";



export const Dialogs = (props: DialogsPropsType) => {
    const { state } = props



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map(el =>
                    <div className={s.users} key={el.id}>
                        <img src={el.avatar} alt="user"/>
                        <DialogItem name={el.name} id={el.id}/>
                    </div>)}
            </div>
            <div className={s.message}>
                {state.messages.map(el =>
                    <MessageItem
                        key={el.id}
                        message={el.message}
                        id={el.id}
                        sender={el.sender}
                    />)}
               <MessageInput
                   addMessage={props.addMessage}
                   state={state}

               />
            </div>
            <div>
            </div>
        </div>
    )
}