import {ReducerPropsType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import React from 'react';
import axios from 'axios';
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToProps = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}


export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: { data: { items: UserType[]; totalCount: number }; }) => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: { data: { items: UserType[]; totalCount: number }; }) => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state: ReducerPropsType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setToggleIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)