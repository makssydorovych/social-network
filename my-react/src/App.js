import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";

const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Navbar />
			<Profile />
		</div>
	);
};

export default App;
