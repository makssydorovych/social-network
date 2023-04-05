import './index.css';
import * as React from "react";
import * as serviceWorker from './serviceWorker';
import store, {AppRootStateType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {createRoot} from 'react-dom/client';
import {connect, Provider} from "react-redux";
import {AppContainer} from "./App";
import {compose} from "@reduxjs/toolkit";
import {initializeApp} from "./redux/app-reducer";

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
    <AppContainer />
    </Provider>
    </BrowserRouter>
)



reportWebVitals();
serviceWorker.unregister();
