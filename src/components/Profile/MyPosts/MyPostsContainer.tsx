import React from "react";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {ReducerPropsType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

type MapStateToPropsType = {
    post: Array<PostType>
    newPostText: string
}

type MapDispatchToProps = {
    updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
}

export type MyPostsContainer = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: ReducerPropsType): MapStateToPropsType => {
    return {
        post: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
            // const addPost = () => {
            //     store.dispatch(addPostAC(store.getState().profilePage.newPostText))

        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)