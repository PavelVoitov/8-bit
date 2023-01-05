import {ReducerPropsType} from "../../redux/redux-store";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from 'react';
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


export type UsersPropsType = MapStateToPropsType & {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}),
    withRouter,
    // withAuthRedirect,
)(UsersContainer)











// export default withAuthRedirect(withRouter(connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers
// })
// (UsersContainer)))


// export default compose(
//     withAuthRedirect,
//     connect(mapStateToProps,
//         {
//             follow,
//             unfollow,
//             setCurrentPage,
//             toggleFollowingProgress,
//             getUsers
//         }))
// (UsersContainer)