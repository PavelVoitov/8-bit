import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import c from './Users.module.css'
import {UserType} from '../../redux/users-reducer';
import axios from 'axios';
import userPhoto from '../../assets/images/photosNull.png'


export const Users = (props: UsersPropsType) => {
    const {follow, unfollow, setUsers, usersPage} = props

    const getUsers = () => {
        if (usersPage.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response: { data: { items: UserType[]; }; }) => {
                    console.log(response.data.items)
                    setUsers(response.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {usersPage.map(el => <div key={el.id}>
                <span>
                    <div>
                       <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt="avatar"
                            className={c.img}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => unfollow(el.id)}>
                                Unfollow</button>
                            : <button onClick={() => follow(el.id)}>
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