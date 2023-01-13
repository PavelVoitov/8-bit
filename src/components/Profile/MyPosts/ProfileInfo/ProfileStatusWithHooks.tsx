import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";


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
            {!editMode && <div>
                <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            }
            {editMode && <div>
                <input
                    onKeyDown={handleKeyDown}
                    autoFocus={true} onBlur={deactivateEditMode}
                       onChange={onStatusChange} value={status}></input>
            </div>
            }
        </>

    );
}

