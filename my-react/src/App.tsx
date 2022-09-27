import "./App.css";
// @ts-ignore
import Header from "./components/Header/Header.tsx";
// @ts-ignore
import Navbar from "./components/Navbar/Navbar.tsx";
// @ts-ignore
import Profile from "./components/Profile/Profile.tsx";
// @ts-ignore
import Dialogs from "./components/Dialogs/Dialogs.tsx";
import {Routes, Route} from "react-router-dom";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <Routes>
                {/*<Route exact path="/" element={<Profile />}/>*/}
                <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                                         updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogPage.dialogs}
                                                         messages={props.state.dialogPage.messages}/>}/>

            </Routes>
        </div>
    );
};

export default App;
