import React, {ChangeEvent, LegacyRef} from "react";
import c from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType, updateNewPostText} from "../../../redux/state";



type MyPostsProps = {
    post: Array<PostType>
    newPostText: string
    addPost: (post: string) => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsProps) => {

    const addPost = () => {
            props.addPost(props.newPostText)
        }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

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