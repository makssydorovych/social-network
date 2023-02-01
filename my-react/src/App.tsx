import React, {Component} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
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
    initialized: boolean;
}
// const SuspendedDialogs = withSuspense(DialogsContainer)
// const SuspendedProfile = withSuspense(ProfileContainer)
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
                <React.Suspense fallback={<Preloader />}>
                <Routes>
                    <Route path={"/"} element={<Navigate to="/profile" />} />
                    <Route path={"/profile"}>
                        <Route index element={<ProfileContainer />} />
                        <Route path=":userId" element={<ProfileContainer />} />
                    </Route>
                    <Route path='/dialogs' element={<DialogsContainer />} />
                    <Route path='/users' element={<UsersContainer pageTitle={"Users"}/>}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<div>404 NOT FOUND</div>} />
                </Routes>
                </React.Suspense>
            </div>
        );
    }

};

export default App;
