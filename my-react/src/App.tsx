import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route} from "react-router-dom";

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar friends={props.state.sidebar.friends}/>
			<Routes>
				{/*<Route exact path="/" element={<Profile />}/>*/}
				<Route path='/profile' element={<Profile posts={props.state.profilePage.posts} />} />
				<Route path='/dialogs' element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>} />

			</Routes>
		</div>
	);
};

export default App;
