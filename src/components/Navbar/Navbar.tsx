import React from "react";
import c from './Navbar.module.css';
import {Sidebar} from "./Sidebar/Sidebar";
import {NavLinks} from "components/Navbar/NavLinks/NavLinks";

export const Navbar = () => {
	return (
		<nav className={c.nav}>
			<NavLinks/>
			{/*	<div className={c.item}>*/}
			{/*		<NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink>*/}
			{/*	</div>*/}
			{/*	<div className={c.item}>*/}
			{/*		<NavLink to={"/dialogs"} activeClassName={c.activeLink}>Messages</NavLink>*/}
			{/*	</div>*/}
			{/*	<div className={c.item}>*/}
			{/*		<NavLink to={"/users"} activeClassName={c.activeLink}>Users</NavLink>*/}
			{/*	</div>*/}
			{/*	<div className={c.item}>*/}
			{/*		<NavLink to={"/news"} activeClassName={c.activeLink}>News</NavLink>*/}
			{/*	</div>*/}
			{/*	<div className={c.item}>*/}
			{/*		<NavLink to={"/music"} activeClassName={c.activeLink}>Music</NavLink>*/}
			{/*	</div>*/}
			{/*	<div className={c.item}>*/}
			{/*		<NavLink to={"/settings"} activeClassName={c.activeLink}>Settings</NavLink>*/}
			{/*	</div>*/}
			{/*	<div>*/}
			<Sidebar/>
		</nav>

	)
}