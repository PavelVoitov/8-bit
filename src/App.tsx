import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, StoreType} from "./redux/store";
import {ReducersPropsType} from "./redux/redux-store";
import {Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

// type AppPropsType = {
//         store: Store<ReducersPropsType>
//     // dispatch: (action: ActionsTypes) => void
// }


const App = (
    // props: AppPropsType
) => {
    // const {
    //     sidebar,
    // } = props.store.getState()

    return (

        <div className="appwrapper">
            <Header/>
            <Navbar
                // state={sidebar}
            />
            <div className='appWrapperContent'>
                <Route path={'/dialogs'} render={() =>
                    <DialogsContainer
                        // store={props.store}
                    />}/>
                <Route path={'/profile'} render={() =>
                    <Profile
                        // store={props.store}
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
