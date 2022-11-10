import React, {ChangeEvent} from "react";

import {StateType} from "../../../redux/store";

type MessageInputPropsType = {
    state: StateType
    onMessageChange: (message: string) => void
    addMessage: (newMessage: string) => void
}


export const MessageInput = (props: MessageInputPropsType) => {

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }

    const addMessage = () => {
        props.addMessage(props.state.messagesPage.newMessage)
    }

    return (
        <div>
            <textarea
                placeholder={'Enter your message...'}
                onChange={onMessageChange}
                value={props.state.messagesPage.newMessage}
            ></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}