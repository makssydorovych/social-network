import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {StoreType} from "./redux/state";
import React from "react";

type PropsType = {
  store: StoreType
}

const App : React.FC<PropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={state.sidebar.friends}/>
            <Routes>

                <Route path='/profile' element={<Profile profilePage={state.profilePage}
                                                         dispatch={props.store.dispatch.bind(props.store)}

                />}/>
                <Route path='/dialogs' element={<Dialogs dialogPage={state.dialogPage}
                                                         // messages={state.dialogPage.messages}
                                                         dispatch={props.store.dispatch.bind(props.store)}
                                                         // newPostBody={""}
                />}/>

            </Routes>
        </div>
    );
};

export default App;
