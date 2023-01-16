
import './index.css';
import * as React from "react";
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from 'react-dom/client';
import {Provider} from "./StoreContext";





const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter>
    <Provider store={store}>
    <App store={store}/>
</Provider>
    </BrowserRouter>
)



reportWebVitals();
serviceWorker.unregister();
