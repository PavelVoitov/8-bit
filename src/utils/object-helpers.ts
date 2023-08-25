import {UserType} from "redux/user-reducer/users-reducer";

export const updateObjectInArray = (items: any[], itemId: number, objPropName: unknown, newObjProps: {}) => items.map(el => {
    return el[objPropName as keyof UserType] === itemId ? {...el, ...newObjProps} : el
})

