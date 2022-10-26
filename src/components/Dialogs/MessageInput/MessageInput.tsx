import React, {ChangeEvent} from "react";
import {sendMessageAC,updateNewMessageAC} from "../../../redux/messages-reducer";
import {ActionsTypes} from "../../../redux/store";

type MessageInputPropsType = {
    dispatch: (action: ActionsTypes) => void
    newMessage: string
}


export const MessageInput = (props: MessageInputPropsType) => {

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageAC(e.currentTarget.value))
    }

    const addMessage = () => {
        props.dispatch(sendMessageAC(props.newMessage))
    }

    return (
        <div>
            <textarea
                placeholder={'Enter your message...'}
                onChange={onMessageChange}
                value={props.newMessage}
            ></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}