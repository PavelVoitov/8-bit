import s from './NavLinks.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

export const NavLinks = () => {
	return (
		<div>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={"/dialogs"} activeClassName={s.activeLink}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={"/users"} activeClassName={s.activeLink}>Users</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={"/videos"} activeClassName={s.activeLink}>Video</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={"/music"} activeClassName={s.activeLink}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to={"/settings"} activeClassName={s.activeLink}>Settings</NavLink>
			</div>
		</div>
	)
}