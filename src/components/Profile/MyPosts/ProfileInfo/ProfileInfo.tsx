import React from "react";
import c from './ProfileInfo.module.css';
import {ProfilePropsType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoProps = {
    profile: ProfilePropsType
    status: string
    updateStatus: (status: string) => void
}


export const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoProps) => {
    if (profile === null) {
        return <Preloader />
    }
    return (
        <div>
            <div className={c.description}>
                <img className={c.avatar} src={profile.photos.large} alt="avatar"/>
                <p>{profile.fullName}</p>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <h2>Contacts:</h2>
                <ul>
                    <li>{profile.contacts.vk}</li>
                    <li>{profile.contacts.facebook}</li>
                    <li>{profile.contacts.twitter}</li>
                    <li>{profile.contacts.instagram}</li>
                </ul>
            </div>
        </div>
    )
}