import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import c from './Users.module.css'


export const Users = (props: UsersPropsType) => {
    const {follow, unfollow, setUsers, usersPage} = props

    const arr = [
        {
            id: 1,
            fotoUrl: 'https://image.api.playstation.com/cdn/UP4040/NPUB30943_00/XDd5XeDsvc7fxvTTiCjW9SMvI18fUBqn.png',
            followed: true,
            fullName: 'Dima',
            status: "I'm reach",
            location: {city: 'Novopolock', country: 'Belarus'}
        },
        {
            id: 2,
            fotoUrl: 'https://image.api.playstation.com/cdn/UP0102/BLUS30453_00/PdAJIYYdTFZ8UHh1jtw7Y1qSs5kMh7B4.png',
            followed: false,
            fullName: 'Senya',
            status: "I'm stupid",
            location: {city: 'Swily', country: 'Belarus'}
        },
        {
            id: 3,
            fotoUrl: 'https://avatars.cloudflare.steamstatic.com/04affbbc83f64433daef59fe38d61141615ad901_full.jpg',
            followed: false,
            fullName: 'Dina',
            status: "I'm beach",
            location: {city: 'Vitebsk', country: 'Belarus'}
        },
        {
            id: 4,
            fotoUrl: 'https://image.api.playstation.com/cdn/UP0102/BLUS30793_00/clGie1A7zDuwwnjKRqkgQw6pddGzhSsz.png',
            followed: false,
            fullName: 'Ignat',
            status: "I'm gamer",
            location: {city: 'Mohilew', country: 'Belarus'}
        },
    ]

    if (usersPage.length === 0 ) {
        setUsers(arr)
    }

    return (
        <div>
            {usersPage.map(el => <div key={el.id}>
                <span>
                    <div>
                       <img src={el.fotoUrl} alt="avatar" className={c.img}/>
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
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                    </span>

                <span>
                        <div>
                            {el.location.country}
                        </div>
                        <div>
                            {el.location.city}
                        </div>
                </span>
            </div>)}
        </div>
    )
}