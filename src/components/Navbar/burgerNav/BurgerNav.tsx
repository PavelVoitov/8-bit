import burgerMenuIsClose from '../../../assets/images/burger-menu.png'
import burgerMenuIsOpen from '../../../assets/images/burger-menu-isOpen.png'
import s from './BurgerNav.module.css'


type Props = {
	openCloseMenu: () => void
	menuOpen: boolean
}

export const BurgerNav = ({openCloseMenu, menuOpen}: Props) => {

	return (
		<div className={s.burgerNav}>
			<img
				className={s.burgerImg}
				onClick={() => openCloseMenu()}
				src={menuOpen ? burgerMenuIsOpen : burgerMenuIsClose}
				alt="menu"
			/>
		</div>
	)
}