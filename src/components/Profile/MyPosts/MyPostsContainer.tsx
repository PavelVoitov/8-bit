import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {Store} from "redux";
import {ReducersPropsType} from "../../../redux/redux-store";



type MyPostsProps = {
    store: Store<ReducersPropsType>
}


export const MyPostsContainer = (props: MyPostsProps) => {
    const { store } = props

    const addPost = () => {
            store.dispatch(addPostAC(store.getState().profilePage.newPostText))
        }


    const onPostChange = (text: string) => {
        store.dispatch(updateNewPostTextAC(text))
    }


    return (
           <MyPosts updateNewPostText={onPostChange} post={props.store.getState().profilePage.post} newPostText={props.store.getState().profilePage.newPostText} addPost={addPost}/>
    )
}