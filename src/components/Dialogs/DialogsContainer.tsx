import React from "react";
import {ReducerPropsType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {MessagesType, sendMessageAC, updateNewMessageAC} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {Dispatch} from 'redux'
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    state: MessagesType
}

type MapDispatchToProps = {
    onMessageChange: (message: string) => void
    addMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

type CommonPropsType = RouteComponentProps & DialogsPropsType

class DialogsContainer extends React.Component<CommonPropsType, {}> {


    render() {

        return (<>
                <div>
                    <Dialogs {...this.props}/>
                </div>
            </>
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
        onMessageChange: (message: string) => {
           dispatch(updateNewMessageAC(message))
        },
        addMessage: (newMessage: string) => {
           dispatch(sendMessageAC(newMessage))
        }
    }
}
const WithUrlDataContainerComponent = withRouter(DialogsContainer)


export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent))
