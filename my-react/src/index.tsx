
import './index.css';
import * as React from "react";
import * as serviceWorker from './serviceWorker';
import * as ReactDOM from 'react-dom/client';
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { addPost, updateNewPostText} from "./redux/state"



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,

    );

};

rerenderEntireTree(store._state);
store.subscribe(rerenderEntireTree);
reportWebVitals();

serviceWorker.unregister();
