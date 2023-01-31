import React, {Component} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./common/preloader/Preloader";
import {mapStateToPropsApp} from "./index";
const DialogsContainer = React.lazy(()=>import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(()=>import("./components/Profile/ProfileContainer"));
type MapPropsType  = ReturnType<typeof mapStateToPropsApp>
type DispatchPropsType= {
    initializeApp: ()=>void
}
class App  extends Component<MapPropsType & DispatchPropsType>  {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) =>{
        alert("Some error occured")
    }
    componentDidMount() {this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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

                    <Route path='/profile:/:userId?' element={<ProfileContainer />}/>
                    <Route path='/dialogs' element={<DialogsContainer />} />
                    <Route path='/users' element={<UsersContainer pageTitle={"Users"}/>}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<div>404 NOT FOUND</div>} />

                </Routes>
            </div>
        );
    }

};

export default App;
