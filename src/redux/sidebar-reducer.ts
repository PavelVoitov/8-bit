import {ActionsTypes, FriendsType, StateType} from "./state";


export const sidebarReducer = (state: {
    friends: Array<FriendsType>
}, action: ActionsTypes) => {
    console.log(action)
    return state;
}