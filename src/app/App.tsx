import React from 'react';
import './App.css';
import {Navbar} from "components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
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

	componentDidMount() {
		this.props.initializeApp()
	}

	render() {

		if (!this.props.initialized) {
			return <Preloader/>
		}
		return (
			<div className="appwrapper">
				<HeaderContainer/>
				<Navbar/>
				<div className='appWrapperContent'>
					<Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
					<Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
					<Route path={'/news'} render={() => <News/>}/>
					<Route path={'/music'} render={() => <Music/>}/>
					<Route path={'/settings'} render={() => <Settings/>}/>
					<Route path={'/users'} render={() => <UsersContainer/>}/>
					<Route path={'/login'} render={withSuspense(Login)}/>
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
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		</BrowserRouter>
	)
}