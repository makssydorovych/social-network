import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import React from "react";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropsType = {
  store: ReduxStoreType
}

const App : React.FC<PropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={state.sidebar.friends}/>
            <Routes>

                <Route path='/profile' element={<Profile store={props.store}
                                                         // dispatch={props.store.dispatch.bind(props.store)}

                />}/>
                <Route path='/dialogs' element={<DialogsContainer store={props.store}
                                                         //    dialogPage={state.dialogsPage}
                                                         // // messages={state.dialogPage.messages}
                                                         // dispatch={props.store.dispatch.bind(props.store)}
                                                         // // newPostBody={""}
                />}/>

            </Routes>
        </div>
    );
};

export default App;
