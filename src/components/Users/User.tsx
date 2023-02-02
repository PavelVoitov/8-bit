import React from "react";
import userPhoto from "../../assets/images/photosNull.png";
import c from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";



type UserPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    user: UserType
}

export const User = ({user, followingInProgress, follow, unfollow}: UserPropsType) => {
    return (
        <div>
              <span>
                  <div>
                      <NavLink to={"/profile/" + user.id}>
                          <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                               alt="avatar"
                               className={c.img}/>
                      </NavLink>
                  </div>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                  <div>
                      {user.followed
                          ? <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        unfollow(user.id)
                                    }}>Unfollow</button>

                          : <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        follow(user.id)
                                    }}>Follow</button>}
                  </div>
              </span>
        </div>
    )
}