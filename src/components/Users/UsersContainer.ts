
import {Users} from "./Users";
import {connect} from "react-redux";
import {ReducerPropsType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";


type MapStateToPropsType = {
    usersPage: Array<UserType>
}

type MapDispatchToProps = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}


export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: ReducerPropsType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: Array<UserType>) => {
           dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users)