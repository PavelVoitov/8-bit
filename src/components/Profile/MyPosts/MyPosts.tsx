import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";



type MyPostsProps = {
    post: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
}


export const MyPosts = (props: MyPostsProps) => {
    const {post, newPostText, updateNewPostText, addPost} = props

    const onAddPost = () => {
        addPost(newPostText)
        }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
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
                    <button onClick={onAddPost}>Send</button>
                </div>
                <div className={c.posts}>
                    {post.map(el =>
                        <Post message={el.message} likesCount={el.likesCount}/>
                    )}

                </div>
            </div>
    )
}