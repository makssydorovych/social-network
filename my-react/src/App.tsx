import React, {Component} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./common/preloader/Preloader";
import {initializeApp} from "./redux/appReducer";
import {connect} from "react-redux";
import {AppDispatch, AppRootStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(()=>import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(()=>import("./components/Profile/ProfileContainer"));

type AppType = {
    initializeApp: () => void;
    initialized: boolean;
};

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp();
    }
    render(){
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar />

                <Routes>
                    <Route path={"/"} element={<Navigate to="/profile" />} />
                    <Route path={"/profile"}>
                        <Route index element={<ProfileContainer />} />
                        <Route path=":userId" element={<ProfileContainer />} />
                    </Route>
                    <Route path='/dialogs' element={<DialogsContainer />} />
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<div>404 NOT FOUND</div>} />
                    {/*<Route path="/chat" element={<Chat />} />*/} --- fo future
                </Routes>

            </div>
        );
    }

}
const mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    initializeApp: () => {
        dispatch(initializeApp());
    },
});
export const AppContainer = connect(mapStateToProps, { initializeApp })(App);
