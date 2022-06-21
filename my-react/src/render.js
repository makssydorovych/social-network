import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import { addPost, updateNewPostText} from "./redux/state.tsx"

export let rerenderEntireTree = (state) =>{ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

};


reportWebVitals();
