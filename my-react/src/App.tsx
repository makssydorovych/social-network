import "./App.css";
import Header from "./components/Header/Header.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Profile from "./components/Profile/Profile.tsx";
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
                <Route path='/dialogs' element={<Dialogs dialogs={props.state.messagesPage.dialogs}
                                                         messages={props.state.messagesPage.messages}/>}/>

            </Routes>
        </div>
    );
};

export default App;
