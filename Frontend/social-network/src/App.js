import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Profil from "./pages/profil.js";
import Home from "./pages/home";
import Login from "./pages/Login.js";

import {Provider} from 'react-redux';
import store from './store/index'

function App() {
    return (
        <Provider store={store}>
        <Router>
            <div>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/myprofil" component={Profil} />
                    <Route path="/login" component={Login} />
                </div>
            </div>
        </Router>
        </Provider>
    );
}

export default App;
