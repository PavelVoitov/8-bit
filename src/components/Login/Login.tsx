import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


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
                <Field type="text"
                       placeholder={'Email'}
                       component={Input}
                       name={'email'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="password"
                       placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="checkbox"
                       component={Input}
                       name={'rememberMe'}
                       validate={[required]}
                /> remember me
            </div>
            <div>
                <Field type="captcha"
                       component={Input}
                       name={'captcha'}
                       validate={[required]}
                />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        // dispatch(loginApi.setLogin(formData))
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}