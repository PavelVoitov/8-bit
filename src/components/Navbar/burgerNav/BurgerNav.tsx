import burgerMenuIsClose from '../../../assets/images/burger-menu.png'
import burgerMenuIsOpen from '../../../assets/images/burger-menu-isOpen.png'
import s from './BurgerNav.module.css'
import {useEffect, useState} from "react";
import {NavLinks} from "components/Navbar/NavLinks/NavLinks";

export const BurgerNav = () => {

	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [open])

	const handleOpenClose = () => {
		setOpen(!open)
	}

	return (
		<div>
			<div className={!open ? s.burgerNavImg : `${s.burgerNavImg} ${s.burgerNavImgClose}`} onClick={handleOpenClose}>
				<img
					src={burgerMenuIsClose}
					alt="menu"
				/>
			</div>
					<div className={!open ? s.burgerNavBlock : `${s.burgerNavBlock} ${s.burgerNavBlockOpen}`}>
              <div className={s.burgerNavImg} onClick={handleOpenClose}>
                  <img
                      src={burgerMenuIsOpen}
                      alt="menu"
                  />
              </div>
              <div className={s.navLinksBlock}>
                  <NavLinks/>
              </div>
					</div>
		</div>


	)
}