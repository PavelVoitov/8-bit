import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./Message/MessageItem";
import {ActionsTypes, DialogType, MessageType, StoreType} from "../../redux/state";
import {MessageInput} from "./MessageInput/MessageInput";



type DialogsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.store._state.messagesPage.dialogs.map(el =>
                    <div className={s.users}>
                        <img src={el.avatar} alt="user"/>
                        <DialogItem name={el.name} id={el.id}/>
                    </div>)}
            </div>
            <div className={s.message}>
                {props.store._state.messagesPage.messages.map(el =>
                    <MessageItem
                        message={el.message}
                        id={el.id}
                        sender={el.sender}
                    />)}
               <MessageInput newMessage = {props.store._state.messagesPage.newMessage}
                             dispatch={props.dispatch}/>
            </div>
            <div>
            </div>
        </div>
    )
}