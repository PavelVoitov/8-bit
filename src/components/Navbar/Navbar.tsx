import React, {useState} from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Sidebar} from "./Sidebar/Sidebar";
import {BurgerNav} from "components/Navbar/burgerNav/BurgerNav";

export const Navbar = () => {
	const [open, setOpen] = useState(false)
	const handleOpenClose = () => {
		setOpen(!open)
	}
	return (
		<nav className={c.nav}>
			<BurgerNav handleOpenClose={handleOpenClose} open={open}/>
			<div className={open ? '' : c.itemNone}>
				<div className={c.item}>
					<NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink>
				</div>
				<div className={c.item}>
					<NavLink to={"/dialogs"} activeClassName={c.activeLink}>Messages</NavLink>
				</div>
				<div className={c.item}>
					<NavLink to={"/users"} activeClassName={c.activeLink}>Users</NavLink>
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
					<Sidebar/>
				</div>
			</div>
		</nav>

	)
}