import React from "react";
import s from './Music.module.css';

export const Music = () => {
	return (
		<div className={s.musicPage}>
			<div>
				<h2>Music</h2>
			</div>
			<div className={s.musicBlock}>
				<div className={s.sound}>
					<img
						src={'https://images.nintendolife.com/f5fd3cbe785c7/battletoads.large.jpg'} alt="battletoads"/>
					<audio
						controls
						src="https://www.dropbox.com/s/d1ucb45yur48vm1/battletoads.mp3?dl=1">
					</audio>
				</div>
				<div className={s.sound}>
					<img
						src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5660ed62-ee66-43aa-a4b3-7350d01900ec/dag4wfs-e886203d-d177-44d4-940d-45e9b6acdedc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2NjBlZDYyLWVlNjYtNDNhYS1hNGIzLTczNTBkMDE5MDBlY1wvZGFnNHdmcy1lODg2MjAzZC1kMTc3LTQ0ZDQtOTQwZC00NWU5YjZhY2RlZGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7MOVxzTMUGsB6oqpUREMgbWU06aAb92s-krI0L3QRb4'}
						alt="battletoads"/>
					<audio
						controls
						src="https://www.dropbox.com/s/ue7dbfa40lx37j2/undertale.mp3?dl=1">
					</audio>
				</div>
				<div className={s.sound}>
					<img
						src={'https://logicsimplified.com/newgames/wp-content/uploads/2017/09/mario.jpg'} alt="battletoads"/>
					<audio
						controls
						src={'https://www.dropbox.com/s/d38nila2c0bsggt/super-mario.mp3?dl=1'}
					>
					</audio>
				</div>
				<div className={s.sound}>
					<img
						src={'https://pm1.narvii.com/6557/ba7e0069201bb4be114f158cd6ed1ea31e70faec_hq.jpg'} alt="battletoads"/>
					<audio
						controls
						src="https://www.dropbox.com/s/7pur2jz6gslwf1g/utki.mp3?dl=1">
					</audio>
				</div>
			</div>
		</div>

	)
}