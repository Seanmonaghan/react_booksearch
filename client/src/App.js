import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from './pages/SearchBooks';
import SaveBooks from './pages/SaveBooks';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                <Route exact path="/" component={SearchBooks}/>
                <Route exact path="/saved" component={SaveBooks} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;