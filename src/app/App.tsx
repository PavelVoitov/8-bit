import React from 'react';
import  s from 'app/App.module.css';
import {Navbar} from "components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Video} from "components/Video/Video";
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
import {PageNotFound} from "components/PageNotFound/PageNotFound";
import {BurgerNav} from "components/Navbar/burgerNav/BurgerNav";
import {NavLinks} from "components/Navbar/NavLinks/NavLinks";
import c from '../../src/components/Navbar/burgerNav/BurgerNav.module.css'

const ProfileContainer = React.lazy(() => import('../components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('../components/Login/Login'));


type AppPropsType = mapStateToPropsType & {
	initializeApp: () => void
}

type mapStateToPropsType = {
	initialized: boolean
}

type StateType = {
	menuOpen: boolean
}

class App extends React.Component<AppPropsType, {}> {
	state: StateType = {
		menuOpen: false
	}

	openCloseMenu = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

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
				<BurgerNav openCloseMenu={this.openCloseMenu} menuOpen={this.state.menuOpen}/>
						<div className={s.appWrapperContent}>
							<Switch>
								<Route exact path="/">{this.props.initialized ? <Redirect to="/profile"/> : <Login/>}</Route>
								<Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
								<Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
								<Route path={'/videos'} render={() => <Video/>}/>
								<Route path={'/music'} render={() => <Music/>}/>
								<Route path={'/settings'} render={() => <Settings/>}/>
								<Route path={'/users'} render={() => <UsersContainer/>}/>
								<Route path={'/login'} render={withSuspense(Login)}/>
								<Route exact={true} path={'*'} render={() => <PageNotFound/>}/>
							</Switch>
						</div>
		<div className={this.state.menuOpen ? `${c.menu} ${c.active}` : `${c.menu}`}>
			<div className={this.state.menuOpen ? `${c.blur}` : ''}>
				<NavLinks />
			</div>
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