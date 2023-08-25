import React from "react";
import {MessagesType} from "redux/messages-reducer/messages-reducer";
import {AddMessageReduxForm, FormMessageDataType} from "components/Dialogs/MessageInput/AddMessageForm/AddMessageForm";

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


