import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";



export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={'Email'} component={'input'} name={'email'}/>
                </div>
                <div>
                    <Field type="password" placeholder={'Password'} component={'input'} name={'password'}/>
                </div>
                <div>
                    <Field type="checkbox" component={'input'} name={'rememberMe'}/> remember me
                </div>
                <div>
                    <Field type="captcha" component={'input'} name={'captcha'}/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)

export const Login = () => {
    const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        // dispatch(loginApi.setLogin(formData))
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}