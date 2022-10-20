import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType, updateNewPostText} from "../../redux/state";



type ProfileType = {
    profilePage: {
        post: Array<PostType>
        newPostText: string
    }
    addPost: (post: string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfileType) => {
    const {post} = props.profilePage
    return (
        <div>
            <ProfileInfo />
            <MyPosts post={post}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    )
}