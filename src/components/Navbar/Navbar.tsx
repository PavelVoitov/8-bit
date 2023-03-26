import React from "react";
import c from './Navbar.module.css';
import {Sidebar} from "./Sidebar/Sidebar";
import {NavLinks} from "components/Navbar/NavLinks/NavLinks";

export const Navbar = () => {
	return (
		<nav className={c.nav}>
			<NavLinks/>
			<Sidebar/>
		</nav>

	)
}