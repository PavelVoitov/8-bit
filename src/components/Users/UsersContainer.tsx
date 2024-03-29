import {ReducerPropsType} from "redux/redux-store";
import {
	follow, requestUsers,
	setCurrentPage,
	unfollow,
	UserType
} from "redux/user-reducer/users-reducer";
import {connect} from "react-redux";
import React from 'react';
import {Users} from "components/Users/users/Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {
	getCurrentPage,
	getFollowingInProgress, getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsersSuperSelector
} from "redux/user-reducer/users-selectors";
import s from './UsersContainer.module.css'


type MapStateToPropsType = {
	usersPage: UserType[]
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
	requestUsers: (currentPage: number, pageSize: number) => void

}

class UsersContainer extends React.Component<UsersPropsType, {}> {

	componentDidMount() {
		const {currentPage, pageSize} = this.props
		this.props.requestUsers(currentPage, pageSize)
	}


	onPageChanged = (pageNumber: number) => {
		const {pageSize} = this.props
		this.props.requestUsers(pageNumber, pageSize)
	}

	render() {
		return <div className={s.usersContainer}>
			{this.props.isFetching ? <Preloader/> : null}
			<Users
				currentPage={this.props.currentPage}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				onPageChanged={this.onPageChanged}
				usersPage={this.props.usersPage}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			/>
		</div>
	}
}

const mapStateToProps = (state: ReducerPropsType): MapStateToPropsType => {
	return {
		usersPage: getUsersSuperSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		requestUsers
	}),
	withRouter,
)(UsersContainer)
