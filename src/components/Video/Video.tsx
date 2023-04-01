import React from "react";
import s from 'components/Video/Video.module.css';

export const Video = () => {
	return (
		<div className={s.videoPage}>
			<div>
				<h1>Video</h1>
			</div>
			<div className={s.videoBlock}>
				<div>
					<video
						src={'https://www.dropbox.com/s/7xe3o2235nrba5w/The%20Matrix%20-%208%20Bit%20Cinema.mp4?dl=1'}
						controls={true}
						className={s.video}
					>
					</video>
				</div>
				<div>
					<video
						src={'https://www.dropbox.com/s/tzxnhnqaieb1nsw/Jurassic%20Park%20-%208%20Bit%20Cinema.mp4?dl=1'}
						controls={true}
						className={s.video}
					>
					</video>
				</div>
				<div>
					<video
						src={'https://www.dropbox.com/s/jsracj78gmrx9ji/Home%20Alone%20-%208%20Bit%20Cinema.mp4?dl=1'}
						controls={true}
						className={s.video}
					>
					</video>
				</div>
				<div>
					<video
						src={'https://www.dropbox.com/s/4gqeewg2x7b3ms4/The%20Mario%20Movie%20Trailer%2C%20but%20it%27s%208-Bit.mp4?dl=1'}
						controls={true}
						className={s.video}
					>
					</video>
				</div>
			</div>
		</div>

	)
}