import React from "react";
import {Store} from "redux";
import {ReducersPropsType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageAC} from "../../redux/messages-reducer";



type DialogsType = {
    store: Store<ReducersPropsType>
}

export const DialogsContainer = (props: DialogsType) => {

    const onMessageChange = (message: string) => {
        props.store.dispatch(updateNewMessageAC(message))
    }

    const addMessage = () => {
        props.store.dispatch(sendMessageAC(props.store.getState().messagesPage.newMessage))
    }

    return <Dialogs store={props.store} onMessageChange={onMessageChange} addMessage={addMessage}/>
}