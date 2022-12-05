import React, {ChangeEvent} from "react";
import {MessagesType} from "../../../redux/messages-reducer";
import {Redirect} from "react-router-dom";

type MessageInputPropsType = {
    state: MessagesType
    onMessageChange: (message: string) => void
    addMessage: (newMessage: string) => void
    isAuth: boolean
}


export const MessageInput = (props: MessageInputPropsType) => {

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }

    const addMessage = () => {
        props.addMessage(props.state.newMessage)
    }

   if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <textarea
                placeholder={'Enter your message...'}
                onChange={onMessageChange}
                value={props.state.newMessage}
            ></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}