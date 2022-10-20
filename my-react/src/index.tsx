
import './index.css';
import * as React from "react";
import * as serviceWorker from './serviceWorker';
import * as ReactDOM from 'react-dom/client';
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";




const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const rerenderEntireTree =  () => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,

    );

};


store.subscribe(rerenderEntireTree);
rerenderEntireTree();
reportWebVitals();

serviceWorker.unregister();
