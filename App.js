import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Nav from './components/Nav';
import Notfound from './components/Notfound';
import AddUser from './actions/AddUser';
import Edit from './actions/Edit';
import View from './actions/View'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <Nav />  
      <Switch>  
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/adduser" component={AddUser}/>
          <Route exact path="/edit/:id" component={Edit}/>
          <Route exact path="/view/:id" component={View}/>
          <Route component={Notfound}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
