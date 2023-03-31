import burgerMenuIsClose from '../../../assets/images/burger-menu.png'
import burgerMenuIsOpen from '../../../assets/images/burger-menu-isOpen.png'
import s from './BurgerNav.module.css'
import {useState} from "react";

export const BurgerNav = () => {

	const [open, setOpen] = useState(false)

	const handleOpenClose = () => {
		setOpen(!open)
	}

	return (
		<div className={s.burgerNav}>
			<img
				className={s.burgerImg}
				onClick={handleOpenClose}
				src={open ? burgerMenuIsOpen : burgerMenuIsClose}
				alt="menu"
			/>
		</div>
	)
}