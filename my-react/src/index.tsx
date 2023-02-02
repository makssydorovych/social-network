import './index.css';
import * as React from "react";
import * as serviceWorker from './serviceWorker';
import store, {AppRootStateType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from 'react-dom/client';
import {connect, Provider} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {initializeApp} from "./redux/appReducer";

export const mapStateToPropsApp = (state: AppRootStateType)=>({
    initialized: state.app.initialized
})
let AppContainer = compose <React.ComponentType>(
    // withRouter,
    connect(mapStateToPropsApp, {initializeApp}))(App)



const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
    <Provider store={store}>
    <AppContainer />
    </Provider>
    </BrowserRouter>
)



reportWebVitals();
serviceWorker.unregister();
