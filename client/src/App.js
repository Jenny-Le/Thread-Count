import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


//Doing a get request to the backend
class App extends Component {
  componentDidMount () {
    fetch('/api/users')
    .then( res => res.json())
    .then(users => console.log(users));
  }

  render() {
    return (
      <div>
      <Logo/>
      <Nav/>
</div>

    )
  }
}
export default App;
