import {ReducerPropsType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";


const getUsersSelector = (state: ReducerPropsType) => {
    return state.usersPage.users;
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users:  UserType[]) => {
    return users;
})



export const getPageSize = (state: ReducerPropsType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: ReducerPropsType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: ReducerPropsType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: ReducerPropsType) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: ReducerPropsType) => {
    return state.usersPage.followingInProgress;
}

