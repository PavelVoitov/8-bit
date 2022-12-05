import React from "react";
import {ReducerPropsType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {MessagesType, sendMessageAC, updateNewMessageAC} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {Dispatch} from 'redux'

type MapStateToPropsType = {
    state: MessagesType
    isAuth: boolean
}

type MapDispatchToProps = {
    onMessageChange: (message: string) => void
    addMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: ReducerPropsType): MapStateToPropsType => {
    return {
        state: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onMessageChange: (message: string) => {
           dispatch(updateNewMessageAC(message))
        },
        addMessage: (newMessage: string) => {
           dispatch(sendMessageAC(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)