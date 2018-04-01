import React, { Component } from "react";
import "./signup.css" 
import API from "./API.js";
import UserForm from "../UserForm"


// You need a constructor to recieve props in a stateful component & state has to be defined in a constructor if you're receiving props
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  } 

  
  handleChange(event) {
    let fieldName = event.target.getAttribute('id');
    this.setState({[fieldName]: event.target.value}, () => console.log(this.state));
  }

  formSubmit(event){
    console.log(event)
    event.preventDefault();
    API.createUser(this.state)
  }

  render () {
    return (
      <UserForm handleChange={this.handleChange.bind(this)}
                formSubmit={this.formSubmit.bind(this)}
                {...this.props}/>
    )
  }
}

export default Signup;