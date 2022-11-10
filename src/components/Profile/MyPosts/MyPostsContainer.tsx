import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {Store} from "redux";
import {ReducersPropsType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";


type MyPostsProps = {
    store: Store<ReducersPropsType>
}


export const MyPostsContainer = (
    // props: MyPostsProps
) => {


    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostAC(store.getState().profilePage.newPostText))
                }

                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return <MyPosts
                    updateNewPostText={onPostChange}
                    post={state.profilePage.post}
                    newPostText={state.profilePage.newPostText} addPost={addPost}/>
            }}
        </StoreContext.Consumer>
    )
}