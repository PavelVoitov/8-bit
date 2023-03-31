import React, {useState} from "react";
import c from './Post.module.css';
import {useSelector} from "react-redux";
import {ReducerPropsType} from "redux/redux-store";
import like from 'assets/images/like.png'

type PostPropsType = {
	message: string
	likesCount?: number
}

export const Post = ({message}: PostPropsType) => {
	const photo = useSelector<ReducerPropsType, string>(state => state.profilePage.profile.photos.small)
	const [likes, setLike] = useState(0)
	return (
		<div className={c.item}>
			<div>
				<img
					src={photo ? photo : "https://ih1.redbubble.net/image.455464050.9428/flat,750x,075,f-pad,750x1000,f8f8f8.u10.jpg"}
					className={c.postPhoto}
					alt="user"/>
				<div>
					<span>
						<img src={like} alt="like" className={c.like} onClick={() => setLike(likes + 1)}/>
						{likes} like
					</span>
				</div>
			</div>
			<div className={c.postText}>
				{message}
			</div>

		</div>
	)
}