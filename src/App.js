import React from "react";
import "./App.css";
import Home from "./pages";
import SignInPage from "./pages/SignIn";
import LearnMore from "./pages/LearnMore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={SignInPage} exact />
                <Route path="/learn" component={LearnMore} exact />
            </Switch>
        </Router>
    );
}

export default App;
