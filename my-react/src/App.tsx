import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<Routes>
				<Route path='/profile' element={<Profile />} />
				<Route path='/dialogs' element={<Dialogs />} />
			</Routes>
		</div>
	);
};

export default App;
