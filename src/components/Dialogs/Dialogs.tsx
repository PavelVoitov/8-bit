import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./Message/MessageItem";
import {MessageInput} from "./MessageInput/MessageInput";
import {DialogsPropsType} from "./DialogsContainer";



// type DialogsType = {
//     state: StateType
//     onMessageChange: (message: string) => void
//     addMessage: (newMessage: string) => void
// }


export const Dialogs = (props: DialogsPropsType) => {
    const { state } = props



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.messagesPage.dialogs.map(el =>
                    <div className={s.users}>
                        <img src={el.avatar} alt="user"/>
                        <DialogItem name={el.name} id={el.id}/>
                    </div>)}
            </div>
            <div className={s.message}>
                {state.messagesPage.messages.map(el =>
                    <MessageItem
                        message={el.message}
                        id={el.id}
                        sender={el.sender}
                    />)}
               <MessageInput
                   onMessageChange={props.onMessageChange}
                   addMessage={props.addMessage}
                   state={state}

               />
            </div>
            <div>
            </div>
        </div>
    )
}