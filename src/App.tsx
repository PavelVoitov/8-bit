import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes} from "./redux/store";
import {ReducersPropsType} from "./redux/redux-store";
import {Store} from "redux";

type AppPropsType = {
    store: Store<ReducersPropsType>
    dispatch: (action: ActionsTypes) => void
}


const App = (props: AppPropsType) => {
    const {
        sidebar,
        messagesPage,
        profilePage
    } = props.store.getState()

    return (

        <div className="appwrapper">
            <Header/>
            <Navbar state={sidebar}/>
            <div className='appWrapperContent'>
                <Route path={'/dialogs'} render={() => <Dialogs messagesPage={messagesPage}
                                                                dispatch={props.dispatch.bind(props.store)}
                />}/>
                <Route path={'/profile'} render={() => <Profile profilePage={profilePage}
                                                                dispatch={props.dispatch.bind(props.store)}
                />}
                />
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
