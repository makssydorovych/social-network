import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Dialogs />
			</div>
			<Profile />
		</div>
	);
};

export default App;
