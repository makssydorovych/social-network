import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType,
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App = (props: PropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <Routes>

                <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                                         updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogPage.dialogs}
                                                         messages={props.state.dialogPage.messages}/>}/>

            </Routes>
        </div>
    );
};

export default App;
