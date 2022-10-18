import React from "react";
import {FriendsType} from "../../../redux/state";
import c from './Sidebar.module.css'

type SidebarPropsType = {
        friends: Array<FriendsType>
}

export const Sidebar = (props: SidebarPropsType) => {
    return (
        <div className={c.friendsSideBar}>
            <div>
                <h4>Friends</h4>
            </div>
            {props.friends.map(el =>
                <div key={el.id}>
                    <div>
                        <img src={el.avatar} alt="avatar"/>
                        <div className={c.friendsName}>
                            {el.name}
                        </div>
                    </div>
                </div>)}
        </div>
    )
}