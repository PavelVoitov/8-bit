import React from "react";
import c from './Sidebar.module.css'
import {store} from "redux/redux-store";


export const Sidebar = () => {
    return (
        <div className={c.friendsSideBar}>
            <div className={c.friendsSideBarTitle}>
                <h4>Friends</h4>
            </div>
          <div className={c.friends}>
            {store.getState().sidebar.friends.map(el =>
              <div key={el.id} className={c.friend}>
                  <div>
                    <img src={el.avatar} alt="avatar"/>
                  </div>
                  <div className={c.friendsName}>
                    {el.name}
                  </div>
              </div>)}
          </div>
        </div>
    )
}