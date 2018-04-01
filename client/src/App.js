import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Home from './components/Home';
import Jcole from './components/Jcole';
import NewListing from './components/NewListing';
import UserEdit from './components/UserEdit';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//Doing a get request to the backend
class App extends Component {
  componentDidMount () {
    fetch('/api/users')
    .then(res => res.json())
    .then(users => console.log(users));
  }
 
  render() {
    return (
      <Router>
    <div>
    <Logo/>
      <Nav/>
      <Switch>
        {/* Telling which component to render. */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Jcole} />
        <Route exact path="/signup" component={Jcole} />
        <Route exact path ="/listings/new" component={NewListing}/>
        <Route exact path ="/users/:id/edit" component={UserEdit}/>
      </Switch>
    </div>
  </Router>
    )
  }
}
export default App;
