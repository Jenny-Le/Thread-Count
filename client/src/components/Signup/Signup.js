import React, { Component } from "react";
import "./signup.css" 
import API from "./API.js";
import UserForm from "../UserForm";
import { Redirect } from "react-router-dom";


// You need a constructor to recieve props in a stateful component & state has to be defined in a constructor if you're receiving props
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      success: false
    }
  } 

  
  handleChange(event) {
    let fieldName = event.target.getAttribute('id');
    this.setState({[fieldName]: event.target.value});
  }

 //Sends the formSubmit to createUser API
  formSubmit(event){
    event.preventDefault();
    API.createUser(this.state, this.loginSuccess.bind(this), this.createToast)
  }

  loginSuccess() {
    this.setState({success: true})
  }

  createToast(message) {
    window.M.toast({html: message})
  }

    //Renders the component
  render () {
    return (
      <div className='row'>
        { this.state.success ? <Redirect to="/" /> : null }
        <div className='col s8 offset-s2 center-align'>
          <h4 className="form-title">Sign Up</h4>
        </div>
        <UserForm handleChange={this.handleChange.bind(this)}
                  formSubmit={this.formSubmit.bind(this)}
                  {...this.props}/>
      </div>
    )
  }
}

export default Signup;