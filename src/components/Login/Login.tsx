import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReducerPropsType} from "../../redux/redux-store";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

interface LoginDataFormPropsType {
    onSubmit: (values: FormDataType) => void
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginDataFormPropsType> & LoginDataFormPropsType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
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
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginDataFormPropsType>({form: 'login'})(LoginForm)



type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType & MapStateToProps) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
      return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type MapStateToProps = {
    isAuth: boolean
}

const mapStateToProps = (state: ReducerPropsType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }

}

export default connect(mapStateToProps, {login})(Login)