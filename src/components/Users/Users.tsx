import React from "react";
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    usersPage: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: Array<number>

}

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}/>
            <div>
                {props.usersPage.map(el => <User key={el.id}
                                                 user={el}
                                                 followingInProgress={props.followingInProgress}
                                                 follow={props.follow}
                                                 unfollow={props.unfollow}/>)}
            </div>
        </div>
    )

}