import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Profil from "./pages/profil.js";
import Main from "./pages/Main";
import Login from "./pages/Login.js";
import AuthContext from "./contexts/AuthContext";

import { Provider } from "react-redux";
import store from "./store/index";

function App() {
    // here we should check if a user is logged in from the cookie

    const [auth, setAuth] = useState({
        loggedIn: false,
        token: null,
    });

    return (
        <Provider store={store}>
            <AuthContext.Provider value={{ auth, setAuth }}>
                <Router>
                    <div>
                        <div>
                            <Route path="/">
                                {auth.loggedIn ? <Main /> : <Login />}
                            </Route>
                            <Route path="/myprofil" component={Profil} />
                            <Route path="/login" component={Login} />
                        </div>
                    </div>
                </Router>
            </AuthContext.Provider>
        </Provider>
    );
}

export default App;
