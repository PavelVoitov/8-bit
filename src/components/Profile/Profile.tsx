import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";



type ProfileType = {
    state: {
        post: Array<PostType>
    }
}

export const Profile = (props: ProfileType) => {
    const {post} = props.state
    return (
        <div>
            <ProfileInfo />
            <MyPosts post={post}/>
        </div>
    )
}