import React from "react";
import s from 'components/Dialogs/Dialogs/Dialogs.module.css';
import {DialogItem} from "components/Dialogs/DialogItem/DialogsItem";
import {MessageItem} from "components/Dialogs/Message/MessageItem";
import {MessageInput} from "components/Dialogs/MessageInput/MessageInput";
import {DialogsPropsType} from "components/Dialogs/DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {
	const {state} = props

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{state.dialogs.map(el =>
					<div className={s.users} key={el.id}>
						<img src={el.avatar} alt="user"/>
						<DialogItem name={el.name} id={el.id}/>
					</div>)}
			</div>
			<div className={s.messagesAndInput}>
				<div className={s.message}>
					{state.messages.map(el =>
						<MessageItem
							key={el.id}
							message={el.message}
							id={el.id}
							sender={el.sender}
						/>)}
				</div>
				<MessageInput
					addMessage={props.addMessage}
					state={state}
				/>
			</div>
			<div>
			</div>
		</div>
	)
}