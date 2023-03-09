import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import s from './ProfileSatusWithHooks.module.css'
import editIcon from 'assets/images/edit-icon.png'


type ProfileStatusPropsType = {
	status: string
	updateStatus: (status: string) => void
}


export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
	const [editMode, setEditMode] = useState<boolean>(false)
	const [status, setStatus] = useState<string>(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])


	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value)
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setEditMode(false)
			props.updateStatus(status)
		}
	}

	return (
		<>
			{!editMode && <div className={s.statusBlock}>
          <span className={s.status} onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
          <img src={editIcon} alt="edit icon" onDoubleClick={activateEditMode}/>
      </div>
			}
			{editMode && <div className={s.statusBlock}>
          <input
              onKeyDown={handleKeyDown}
              autoFocus={true}
              onBlur={deactivateEditMode}
              onChange={onStatusChange}
              value={status}></input>
      </div>
			}
		</>

	);
}

