import React from "react";
import c from './ProfileInfo.module.css';
import {ProfilePropsType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoProps = {
    profile: ProfilePropsType
}


export const ProfileInfo = (props: ProfileInfoProps) => {
    if (props.profile === null) {
        return <Preloader />
    }
    return (
        <div>
            {/*<img className={c.fon} src={require('../../../../assets/images/kosmos.png')} alt="rockets"/>*/}
            <div className={c.description}>
                <img className={c.avatar} src={props.profile.photos.large} alt="avatar"/>
                <p>{props.profile.fullName}</p>
                <ProfileStatus status={'Hello world!'}/>
                <h2>Contacts:</h2>
                <ul>
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.instagram}</li>
                </ul>
            </div>
        </div>
    )
}