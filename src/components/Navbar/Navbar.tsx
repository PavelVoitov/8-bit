import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Sidebar} from "./Sidebar/Sidebar";
import {store} from "../../redux/store";

// type NavbarPropsType = {
//     state: {
//         friends: Array<FriendsType>
//     }
//
// }

export const Navbar = (
    // props: NavbarPropsType
) => {
    return (

       <nav className={c.nav}>
                    <div className={c.item}>
                        <NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink>
                    </div>
                    <div className={c.item}>
                        <NavLink to={"/dialogs"} activeClassName={c.activeLink}>Messages</NavLink>
                    </div>
                    <div className={c.item}>
                        <NavLink to={"/news"} activeClassName={c.activeLink}>News</NavLink>
                    </div>
                    <div className={c.item}>
                        <NavLink to={"/music"} activeClassName={c.activeLink}>Music</NavLink>
                    </div>
                    <div className={c.item}>
                        <NavLink to={"/settings"} activeClassName={c.activeLink}>Settings</NavLink>
                    </div>
                    <div>
                        <Sidebar
                            friends={store._state.sidebar.friends}
                        />
                    </div>
                </nav>

    )
}