import React, {Component} from 'react';
import './App.css';
import Header from './layout/Header';
import MenuNav from './layout/MenuNav';
import Footer from './layout/Footer';

import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Insert from './pages/Insert';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <MenuNav />
                    <Route exact path="/" component={Home}/>
                    <Route path="/Books" component={Books}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Insert" component={Insert}/>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
