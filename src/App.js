import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import reachUs from './pages/reachUs';


function App() {
  return (
    <Router> 
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/reachUs" component={reachUs} exact />
      </Switch>
       
    </Router>
  );
}

export default App;
