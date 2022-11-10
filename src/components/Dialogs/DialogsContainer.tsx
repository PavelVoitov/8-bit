import React from "react";
import {Store} from "redux";
import {ReducersPropsType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageAC} from "../../redux/messages-reducer";
import {StoreContext} from "../../StoreContext";


type DialogsType = {
    store: Store<ReducersPropsType>
}

export const DialogsContainer = (
    // props: DialogsType
) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                const onMessageChange = (message: string) => {
                    store.dispatch(updateNewMessageAC(message))
                }

                const addMessage = (newMessage: string) => {
                    store.dispatch(sendMessageAC(newMessage))
                }
                return <Dialogs
                    state={state}
                    onMessageChange={onMessageChange}
                    addMessage={addMessage}/>}}

        </StoreContext.Consumer>
    )
}