import './index.css';
import * as React from "react";


import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./redux/redux-store";

// export const mapStateToPropsApp = (state: AppRootStateType)=>({
//     initialized: state.app.initialized
// })
// let AppContainerr = compose <React.ComponentType>(
//     // withRouter,
//     connect(mapStateToPropsApp, {initializeApp}))(AppContainer)



const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
)



reportWebVitals();
// ServiceWorker.unregister();
