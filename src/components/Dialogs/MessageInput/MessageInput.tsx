import React from "react";
import {MessagesType} from "../../../redux/messages-reducer";
import {AddMessageReduxForm, FormMessageDataType} from "./AddMessageForm";

type MessageInputPropsType = {
    state: MessagesType
    addMessage: (newMessage: string) => void
}


export const MessageInput = (props: MessageInputPropsType) => {

    const addMessage = (values: FormMessageDataType) => {
        props.addMessage(values.message)
    }
    return (
        <div>
            <AddMessageReduxForm
                onSubmit={addMessage}
            />
        </div>
    )
}


