import logo from "./logo.svg";
import "./App.css";

const App = () => {
	return (
		<div>
			<Header />
			<Technologies />
		</div>
	);
};
const Technologies = () => {
	return (
		<ul>
			<li>html</li>
			<li>css</li>
			<li>js</li>
			<li>react</li>
		</ul>
	);
};
const Header = () => {
	return (
		<div className='App'>
			<a>Home</a>
			<a>BBBB</a>
			<a>CCCCC</a>
		</div>
	);
};

export default App;
