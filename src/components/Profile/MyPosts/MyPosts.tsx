import React from "react";
import c from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {AddPostReduxForm, FormPostDataType} from "./Post/AddPostForm";


type MyPostsProps = {
    post: Array<PostType>
    addPost: (newPostText: string) => void
}


export const MyPosts = (props: MyPostsProps) => {
    const {post, addPost} = props

    const onAddPost = (values: FormPostDataType) => {
        addPost(values.post)
    }


    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     updateNewPostText(e.currentTarget.value)
    // }


    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onAddPost} />
            <div className={c.posts}>
                {post.map(el =>
                    <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
                )}

            </div>
        </div>
    )
}
