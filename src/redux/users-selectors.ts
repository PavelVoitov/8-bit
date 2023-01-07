import {ReducerPropsType} from "./redux-store";

export const getUsers = (state: ReducerPropsType) => {
    return state.usersPage.users;
}

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

