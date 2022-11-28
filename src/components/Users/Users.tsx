import React from "react";
import {Pagination} from "@mui/material";
import userPhoto from "../../assets/images/photosNull.png";
import c from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    usersPage: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void

}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
        return (
            <div>
                <Pagination count={props.totalUsersCount} onChange={(e, p) => props.onPageChanged(p)}
                            variant="outlined" shape="rounded" color="primary"/>
                {props.usersPage.map(el => <div key={el.id}>
                                <span>
                                    <div>
                                        <NavLink to={"/profile/" + el.id}>
                                             <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt="avatar"
                                                  className={c.img}/>
                                        </NavLink>

                                    </div>
                                    <div>
                                        {el.followed
                                            ? <button onClick={() => props.unfollow(el.id)}>
                                                Unfollow</button>
                                            : <button onClick={() => props.follow(el.id)}>
                                                Follow</button>}
                                    </div>
                                </span>

                    <span>
                             <span>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </span>
                        </span>

                    <span>
                                <div>
                                    {"el.location.country"}
                                </div>
                                <div>
                                    {"el.location.city"}
                                </div>
                        </span>
                </div>)}
            </div>
    )

}