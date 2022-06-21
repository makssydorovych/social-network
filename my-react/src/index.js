import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state.tsx";
import { addPost } from "./redux/state.tsx";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state);

reportWebVitals();
