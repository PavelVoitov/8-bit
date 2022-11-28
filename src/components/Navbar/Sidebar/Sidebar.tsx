import React from "react";
import c from './Sidebar.module.css'
import {store} from "../../../redux/redux-store";


export const Sidebar = () => {
    return (
        <div className={c.friendsSideBar}>
            <div>
                <h4>Friends</h4>
            </div>
            {store.getState().sidebar.friends.map(el =>
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