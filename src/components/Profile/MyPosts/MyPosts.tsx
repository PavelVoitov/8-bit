import React, {LegacyRef} from "react";
import c from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";



type MyPostsProps = {
    post: Array<PostType>
}

export const MyPosts = (props: MyPostsProps) => {

    let newPostElement  = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value;
            alert(text)
        }
    }

    return (
            <div className={c.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
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