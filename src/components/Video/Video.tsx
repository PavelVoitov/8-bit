import React from "react";
import s from 'components/Video/Video.module.css';
import YouTube from "react-youtube";

export const Video = () => {
 const opts = {
	 width: '400',
	 height: '300',
 }

	return (
		<div className={s.videoPage}>
			<div>
				<h1>Video</h1>
			</div>
			<div className={s.videoBlock}>
				<YouTube videoId={'sVGuwEeQKtE'} className={s.video} opts={opts}/>
				<YouTube videoId={'g4gBXXWwi7w'} className={s.video} opts={opts}/>
				<YouTube videoId={'tB4vsl1GmTE'} className={s.video} opts={opts}/>
				<YouTube videoId={'4zK5ewbQ6GE'} className={s.video} opts={opts}/>
			</div>
		</div>

	)
}