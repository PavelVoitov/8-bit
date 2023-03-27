import React from "react";
import {UserType} from "redux/users-reducer";
import {Paginator} from "components/common/Paginator/Paginator";
import {User} from "components/Users/users/user/User";
import s from './Users.module.css'


type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
	usersPage: Array<UserType>
	follow: (id: number) => void
	unfollow: (id: number) => void
	followingInProgress: Array<number>
	currentPage: number

}

export const Users = (props: UsersPropsType) => {
	return (
		<div>
			<div className={s.paginator}>
				<Paginator
					totalItemsCount={props.totalUsersCount}
					pageSize={props.pageSize}
					onPageChanged={props.onPageChanged}
					currentPage={props.currentPage}
				/>
			</div>
			<div className={s.users}>
				{props.usersPage.map(el => <User key={el.id}
																				 user={el}
																				 followingInProgress={props.followingInProgress}
																				 follow={props.follow}
																				 unfollow={props.unfollow}/>)}
			</div>
		</div>
	)

}