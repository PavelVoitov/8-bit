import s from './FormControls.module.css'
import React from "react";

type TextareaPropsType = {
    input: {}
    meta: {
        error: string
        touched: boolean
    }
    children: JSX.Element
}


const FormControl = ({meta: {touched, error}, children}: TextareaPropsType) => {
    const hasError = touched && error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div className={s.errorSpan}>
                {hasError && <span>{error}</span>}
            </div>
            <div>
                {children}
            </div>

        </div>
    )
}

export const Textarea = (props: TextareaPropsType) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )

}

export const Input = (props: TextareaPropsType) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}
