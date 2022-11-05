import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./Message/MessageItem";
import {MessageInput} from "./MessageInput/MessageInput";
import {Store} from "redux";
import {ReducersPropsType} from "../../redux/redux-store";



type DialogsType = {
    store: Store<ReducersPropsType>
    onMessageChange: (message: string) => void
    addMessage: (newMessage: string) => void
}

export const Dialogs = (props: DialogsType) => {
    const { store } = props



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {store.getState().messagesPage.dialogs.map(el =>
                    <div className={s.users}>
                        <img src={el.avatar} alt="user"/>
                        <DialogItem name={el.name} id={el.id}/>
                    </div>)}
            </div>
            <div className={s.message}>
                {store.getState().messagesPage.messages.map(el =>
                    <MessageItem
                        message={el.message}
                        id={el.id}
                        sender={el.sender}
                    />)}
               <MessageInput
                   onMessageChange={props.onMessageChange}
                   addMessage={props.addMessage}
                   store={store}

               />
            </div>
            <div>
            </div>
        </div>
    )
}