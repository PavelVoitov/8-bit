import React from "react";
import userPhoto from "assets/images/photosNull.png";
import c from "components/Users/users/user/User.module.css";
import {UserType} from "redux/user-reducer/users-reducer";
import {NavLink} from "react-router-dom";



type UserPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    user: UserType
}

export const User = ({user, followingInProgress, follow, unfollow}: UserPropsType) => {
    return (
        <div className={c.users}>
              <div>
                  <div className={c.avatar}>
                      <NavLink to={"/profile/" + user.id}>
                          <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                               alt="avatar"
                               className={c.img}/>
                      </NavLink>
                  </div>
                    <div className={c.nameBlock}>
                        <div className={c.userName}>{user.name}</div>
                    </div>
                  <div className={c.button}>
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
              </div>
        </div>
    )
}