import React, { Component } from "react";
import "./signup.css" 
import API from "./API.js";


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
      
    <div className="row">
      <form className="col s12" id="user-signup">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" onChange={this.handleChange.bind(this)}/>
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" onChange={this.handleChange.bind(this)}/>
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" onChange={this.handleChange.bind(this)}/>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" onChange={this.handleChange.bind(this)}/>
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <button onClick={this.formSubmit.bind(this)} className="btn waves-effect waves-light">Submit
          <i className="material-icons right">send</i>
        </button>
    
        <div className="col sm12">
          <span onClick={() => this.props.handleFormChange('signup')}>Already a member? Log in</span>
        </div>
      </form>
    </div>
    )
  }
}

export default Signup;