import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./Message/MessageItem";
import {DialogType, MessageType} from "../../redux/state";


type DialogsType = {
    state: {
        dialogs: Array<DialogType>
        messages: Array<MessageType>
    }

}

export const Dialogs = (props: DialogsType) => {
    const {dialogs, messages} = props.state


    const Message = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        let text = Message.current?.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(el =>
                    <div className={s.users}>
                        <img src={el.avatar} alt="user"/>
                        <DialogItem name={el.name} id={el.id}/>
                    </div>)}
            </div>
            <div className={s.message}>
                {messages.map(el =>
                    <MessageItem
                        message={el.message}
                        id={el.id}
                        sender={el.sender}
                    />)}
            </div>
            <div>
                <textarea ref={Message}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}