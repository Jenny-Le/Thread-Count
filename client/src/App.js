import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Home from './components/Home';
import ImageCard from './components/ImageCard';
import Jcole from './components/Jcole';
import NewListing from './components/NewListing';
import UserEdit from './components/UserEdit';
import CategoryBar from './components/CategoryBar';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Doing a get request to the backend
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: null
    }
  }

  homeComponent(props) {
    // ...props is passing all of this current component's props into the Home component
    return <Home searchQuery={this.state.searchQuery} {...props} />
  }

  //receives a string to update our search query state.
  updateSearchQuery(query) {
    this.setState({ searchQuery: query });
  }



  render() {
    return (
      <Router>
        <div>
          <main>
            <Logo />
            <Nav updateSearchQuery={this.updateSearchQuery.bind(this)} />
            <CategoryBar />
            <Switch>
              {/* Telling which component to render. */}
              <Route exact path="/" render={this.homeComponent.bind(this)} />
              <Route exact path="/login" component={Jcole} />
              <Route exact path="/signup" component={Jcole} />
              <Route exact path="/listings/new" component={NewListing} />
              <Route exact path="/users/:id/edit" component={UserEdit} />
              <Route exact path="/image" component={ImageCard} />
              <Route path="*" render={this.homeComponent.bind(this)} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
export default App;
