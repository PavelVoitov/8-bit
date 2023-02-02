import React from "react";
import {addPostAC, PostType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {ReducerPropsType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

type MapStateToPropsType = {
    post: Array<PostType>
}

type MapDispatchToProps = {
    addPost: (newPostText: string) => void
}

export type MyPostsContainer = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: ReducerPropsType): MapStateToPropsType => {
    return {
        post: state.profilePage.post,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)