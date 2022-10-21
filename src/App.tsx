import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) =>  {

    const state = props.store.getState()

  return (
      <BrowserRouter>
          <div className="appwrapper">
              <Header />
              <Navbar state={state.sidebar}/>
              {/*<Profile />*/}
              <div className='appWrapperContent'>
                  <Route path={'/dialogs'} render={() => <Dialogs state={state.messagesPage}/>}/>
                  <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage}
                                                                  addPost={props.store.addPost.bind(props.store)}
                                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}
                  />
                  <Route path={'/news'} render={() => <News />}/>
                  <Route path={'/music'} render={() => <Music />}/>
                  <Route path={'/settings'} render={() => <Settings />}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
