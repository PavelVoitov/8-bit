import React from "react";
import s from './MessageItem.module.css'

type MessagePropsType = {
	message: string
	id: number
	sender: string
}

export const MessageItem = (props: MessagePropsType) => {
	const {message, id, sender} = props

	return (
		<div className={sender === 'I' ? s.messageBlock : `${s.messageBlockUser} ${s.messageBlock}`}>
			<div className={sender === 'I' ? s.corner : s.cornerUser}></div>
			<div key={id} className={sender === 'I' ? s.messageImg : s.messageUser}>
				<div className={s.textMessage}>{message}</div>
				<div className={s.time}>10:30</div>
			</div>
		</div>

	)
}


