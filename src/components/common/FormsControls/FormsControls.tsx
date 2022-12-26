import s from './FormControls.module.css'

type TextareaPropsType = {
    input: {}
    meta: {
        error: string
        touched: boolean
    }
    children: JSX.Element
}

const FormControl = ({input, meta, ...props}: TextareaPropsType) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ?  s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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