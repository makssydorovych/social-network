import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";



const App  = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <Routes>

                <Route path='/profile:/:userId?' element={<Profile />}/>
                <Route path='/dialogs' element={<DialogsContainer />} />
                <Route path='/users' element={<UsersContainer />}/>



            </Routes>
        </div>
    );
};

export default App;
