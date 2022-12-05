import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserDataThunk} from "../../redux/auth-reducer";
import {ReducerPropsType} from "../../redux/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerPropsType = mapStateToPropsType & {
    setAuthUserData: (userId: string | null, email: string | null, login: string | null,) => void
    setAuthUserDataThunk: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        // usersAPI.setAuth()
        //     .then((data) => {
        //         if (data.resultCode === 0) {
        //             let {id, email, login} = data.data
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     })
        this.props.setAuthUserDataThunk()
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

export default connect(mapStateToProps, {setAuthUserData, setAuthUserDataThunk})(HeaderContainer)