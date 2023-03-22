import React from 'react';
import  s from 'app/App.module.css';
import {Navbar} from "components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {News} from "components/News/News";
import {Music} from "components/Music/Music";
import {Settings} from "components/Settings/Settings";
import UsersContainer from "../components/Users/UsersContainer";
import HeaderContainer from "../components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "redux/app-reducer";
import {ReducerPropsType, store} from "redux/redux-store";
import {Preloader} from "components/common/Preloader/Preloader";
import {withSuspense} from "hoc/withSuspense";
import pageNotFound from 'assets/images/pageNotFound.jpg'

const ProfileContainer = React.lazy(() => import('../components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('../components/Login/Login'));


type AppPropsType = mapStateToPropsType & {
	initializeApp: () => void
}

type mapStateToPropsType = {
	initialized: boolean
}

class App extends React.Component<AppPropsType, {}> {
	catchAllUnhandledErrors = (promiseRejectionEvent: any) => {
		console.log(promiseRejectionEvent)
	}

	componentDidMount() {
		this.props.initializeApp()
		window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
	}

	componentWillUnmount() {
		window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
	}


	render() {

		if (!this.props.initialized) {
			return <Preloader/>
		}
		return (
			<div className={s.appWrapper}>
				<HeaderContainer/>
				<Navbar/>
				<div className={s.appWrapperContent}>
					<Switch>
						<Route exact path="/">{this.props.initialized ? <Redirect to="/profile"/> : <Login/>}</Route>
						<Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
						<Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
						<Route path={'/news'} render={() => <News/>}/>
						<Route path={'/music'} render={() => <Music/>}/>
						<Route path={'/settings'} render={() => <Settings/>}/>
						<Route path={'/users'} render={() => <UsersContainer/>}/>
						<Route path={'/login'} render={withSuspense(Login)}/>
						<Route exact={true} path={'*'} render={() => <div><img src={pageNotFound} alt=""/></div>}/>
					</Switch>
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state: ReducerPropsType) => {
	return {
		initialized: state.app.initialized
	}
}

const AppContainer = compose<React.ComponentType>(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App)

export const MainApp = () => {
	return (
		<HashRouter>
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		</HashRouter>
	)
}