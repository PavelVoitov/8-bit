import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "utils/validators/validators";
import {login} from "redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReducerPropsType} from "redux/redux-store";
import s from '../common/FormsControls/FormControls.module.css'


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
				/> remember me
			</div>
			{captchaUrl && <img src={captchaUrl} alt="captcha"/>}
			{captchaUrl && <Field placeholder={'Symbols from image'}
                            component={Input}
                            name={'captcha'}
                            validate={[required]}
      />}
			{error &&
					<div className={s.formSummaryError}>
						{error}
          </div>}
			<div>
				<button>Login</button>
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
		<div>
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

export default connect(mapStateToProps, {login})(Login)