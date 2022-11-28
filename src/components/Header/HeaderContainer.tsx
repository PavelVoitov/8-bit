import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {ReducerPropsType} from "../../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerPropsType = mapStateToPropsType & {
    setAuthUserData: (userId: string | null, email: string | null, login: string | null,) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: ReducerPropsType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }


}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)