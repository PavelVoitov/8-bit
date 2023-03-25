import burgerMenuIsClose from '../../../assets/images/burger-menu.png'
import burgerMenuIsOpen from '../../../assets/images/burger-menu-isOpen.png'
import s from './BurgerNav.module.css'
import {useState} from "react";
import {NavLinks} from "components/Navbar/NavLinks/NavLinks";

// type Props = {
// 	// handleOpenClose: () => void;
// 	// open: boolean
// }

export const BurgerNav = () => {
	const [open, setOpen] = useState(false)
	const handleOpenClose = () => {
		setOpen(!open)
	}

	return (
		<div style={{background: "grey"}}>
			<div className={s.burgerNavImg} onClick={handleOpenClose}>
				<img
					src={!open ? burgerMenuIsClose : burgerMenuIsOpen}
					alt="menu"
				/>
			</div>
			<NavLinks/>
		</div>


	)
}