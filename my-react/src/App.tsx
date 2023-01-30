
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



const App  = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar />
            <Routes>

                <Route path='/profile:/:userId?' element={<Profile />}/>
                <Route path='/dialogs' element={<DialogsContainer />} />
                <Route path='/users' element={<UsersContainer pageTitle={"Users"}/>}/>
                <Route path='/login' element={<Login />} />



            </Routes>
        </div>
    );
};

export default App;
