import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileСontainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {ReducerPropsType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


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
            return <Preloader />
        }
        return (
            <div className="appwrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() =>
                        <ProfileContainer/>}
                    />
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: ReducerPropsType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
