import React from "react";
import s from 'components/Videos/Videos.module.css';
import YouTube from "react-youtube";

export const Videos = () => {
 const opts = {
	 width: '380',
	 height: '300',
 }

	return (
		<div className={s.videosBlock}>
			<YouTube videoId={'sVGuwEeQKtE'} className={s.video} opts={opts}/>
			<YouTube videoId={'g4gBXXWwi7w'} className={s.video} opts={opts}/>
			<YouTube videoId={'tB4vsl1GmTE'} className={s.video} opts={opts}/>
			<YouTube videoId={'4zK5ewbQ6GE'} className={s.video} opts={opts}/>
		</div>
	)
}