import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "../../redux/profile-reducer";

type ProfileType = {
    profile: ProfilePropsType
    status: string
    updateStatus: (status: string) => void
}


export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}