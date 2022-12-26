import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunk, logout} from "../../redux/auth-reducer";
import {ReducerPropsType} from "../../redux/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerPropsType = mapStateToPropsType & {
    logout: () => void
    getAuthUserDataThunk: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

    componentDidMount() {
        this.props.getAuthUserDataThunk()
    }

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

export default connect(mapStateToProps, {getAuthUserDataThunk, logout})(HeaderContainer)