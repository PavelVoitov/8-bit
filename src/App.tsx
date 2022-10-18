import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {state, StateType} from './redux/state';

function App() {

  return (
      <BrowserRouter>
          <div className="appwrapper">
              <Header />
              <Navbar state={state.sidebar}/>
              {/*<Profile />*/}
              <div className='appWrapperContent'>
                  <Route path={'/dialogs'} render={() => <Dialogs state={state.messagesPage}/>}/>
                  <Route path={'/profile'} render={() => <Profile state={state.profilePage}/>}/>
                  <Route path={'/news'} render={() => <News />}/>
                  <Route path={'/music'} render={() => <Music />}/>
                  <Route path={'/settings'} render={() => <Settings />}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
