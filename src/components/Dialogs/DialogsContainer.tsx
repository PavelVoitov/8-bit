import React from "react";
import {ReducerPropsType} from "redux/redux-store";
import {Dialogs} from "components/Dialogs/Dialogs/Dialogs";
import {MessagesType, sendMessageAC} from "redux/messages-reducer/messages-reducer";
import {connect} from "react-redux";
import {compose, Dispatch} from 'redux'
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "hoc/withAuthRedirect";


type MapStateToPropsType = {
    state: MessagesType
}

type MapDispatchToProps = {
    addMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

type CommonPropsType = RouteComponentProps & DialogsPropsType

class DialogsContainer extends React.Component<CommonPropsType, {}> {


    render() {

        return (
                <div>
                    <Dialogs {...this.props}/>
                </div>
        )
    }
}

const mapStateToProps = (state: ReducerPropsType): MapStateToPropsType => {
    return {
        state: state.messagesPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addMessage: (newMessage: string) => {
           dispatch(sendMessageAC(newMessage))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(DialogsContainer)