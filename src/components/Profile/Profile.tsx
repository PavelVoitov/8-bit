import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {Store} from "redux";
import {ReducersPropsType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type ProfileType = {
    store: Store<ReducersPropsType>
}

export const Profile = (props: ProfileType) => {
    const {store} = props
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={store}/>
        </div>
    )
}