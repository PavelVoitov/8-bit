import React, {ChangeEvent, LegacyRef} from "react";
import c from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {ActionsTypes, PostType} from "../../../redux/state";



type MyPostsProps = {
    post: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


export const MyPosts = (props: MyPostsProps) => {

    const addPost = () => {
            props.dispatch(addPostAC(props.newPostText))
        }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }


    return (
            <div className={c.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
                <div className={c.posts}>
                    {props.post.map(el =>
                        <Post message={el.message} likesCount={el.likesCount}/>
                    )}

                </div>
            </div>
    )
}