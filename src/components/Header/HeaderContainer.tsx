import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {ReducerPropsType} from "redux/redux-store";
import {logoutAC} from "redux/auth-reducer/auth-sagas";


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerPropsType = mapStateToPropsType & {
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = (state: ReducerPropsType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logout: logoutAC})(HeaderContainer)