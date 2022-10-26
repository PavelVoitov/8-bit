import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/store";



type ProfileType = {
    profilePage: {
        post: Array<PostType>
        newPostText: string
    }
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfileType) => {
    const {post} = props.profilePage
    return (
        <div>
            <ProfileInfo />
            <MyPosts post={post}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}