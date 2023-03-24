import burgerMenuIsClose from '../../../assets/images/burger-menu.png'
import burgerMenuIsOpen from '../../../assets/images/burger-menu-isOpen.png'
import s from './BurgerNav.module.css'

type Props = {
	handleOpenClose: () => void;
	open: boolean
}

export const BurgerNav = ({handleOpenClose, open}: Props) => {

	return (
		<div className={s.burgerNavImg} onClick={handleOpenClose}>
			<img src={!open ? burgerMenuIsClose : burgerMenuIsOpen} alt="menu"/>
		</div>

	)
}