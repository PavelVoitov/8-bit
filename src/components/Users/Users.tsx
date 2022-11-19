import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import c from './Users.module.css'
import {UserType} from '../../redux/users-reducer';
import axios from 'axios';
import userPhoto from '../../assets/images/photosNull.png'
import {Pagination} from "@mui/material";


export class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: { data: { items: UserType[]; totalCount: number }; }) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: { data: { items: UserType[]; totalCount: number }; }) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div>
                <Pagination count={this.props.totalUsersCount} onChange={(e, p) => this.onPageChanged(p)} variant="outlined" shape="rounded" color="primary" />
                {/*<div >*/}
                {/*    {pages.map(el => { return <span className={this.props.currentPage === el ? c.selectedPage : c.page} onClick={() => {this.onPageChanged(el)}}>{el}</span>*/}
                {/*    })}*/}
                {/*</div>*/}

                {this.props.usersPage.map(el => <div key={el.id}>
                <span>
                    <div>
                       <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt="avatar"
                            className={c.img}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => this.props.unfollow(el.id)}>
                                Unfollow</button>
                            : <button onClick={() => this.props.follow(el.id)}>
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
        );
    }
}