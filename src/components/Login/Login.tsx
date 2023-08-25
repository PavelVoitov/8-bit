import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "utils/validators/validators";
import {Redirect} from "react-router-dom";
import {ReducerPropsType} from "redux/redux-store";
import s from '../common/FormsControls/FormControls.module.css'
import style from './Login.module.css'
import {loginAC} from "redux/auth-reducer/auth-sagas";


export type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}

export type  LoginDataFormPropsType = {
	onSubmit: (values: FormDataType) => void
	captchaUrl: string | null
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginDataFormPropsType>
	& LoginDataFormPropsType> = ({handleSubmit, error, captchaUrl}) => {
	return (
		<form onSubmit={handleSubmit}>
			<p style={{opacity: 0.5}}>
				To log in get registered here<br/><br/>
				or use common test account credentials:<br/><br/>
				<b>Email:</b> free@samuraijs.com<br/><br/>
				<b>Password:</b> free
			</p>
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
			<div className={style.checkboxField}>
				<Field type="checkbox"
							 component={Input}
							 name={'rememberMe'}
				/>
				<div className={style.rememberMe}>remember me</div>
			</div>
			{captchaUrl && <img src={captchaUrl} alt="captcha"/>}
			{captchaUrl && <Field placeholder={'Symbols from image'}
                            component={Input}
                            name={'captcha'}
                            validate={[required]}
      />}
			<div className={style.button}>
				<button>Login</button>
			</div>
			<div className={style.error}>
				{error &&
            <div className={s.formSummaryError}>
							{error}
            </div>}
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<FormDataType, LoginDataFormPropsType>({form: 'login'})(LoginForm)


type LoginPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login = (props: LoginPropsType & MapStateToProps) => {

	const onSubmit = (formData: FormDataType) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'}/>
	}
	return (
		<div className={style.loginForm}>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
		</div>
	)
}

type MapStateToProps = {
	isAuth: boolean
	captchaUrl: string | null
}

const mapStateToProps = (state: ReducerPropsType): MapStateToProps => {
	return {
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl
	}

}

export default connect(mapStateToProps, {login: loginAC})(Login)