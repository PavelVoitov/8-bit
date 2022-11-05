import React, {ChangeEvent} from "react";
import {Store} from "redux";
import {ReducersPropsType} from "../../../redux/redux-store";

type MessageInputPropsType = {
    store: Store<ReducersPropsType>
    onMessageChange: (message: string) => void
    addMessage: (newMessage: string) => void
}


export const MessageInput = (props: MessageInputPropsType) => {

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }

    const addMessage = () => {
        props.addMessage(props.store.getState().messagesPage.newMessage)
    }

    return (
        <div>
            <textarea
                placeholder={'Enter your message...'}
                onChange={onMessageChange}
                value={props.store.getState().messagesPage.newMessage}
            ></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}