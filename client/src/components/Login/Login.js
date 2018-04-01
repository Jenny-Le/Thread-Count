import React, { Component } from "react";
import "./login.css" 
import API from "./API"

class Login extends Component  {
    constructor(props) {
        super(props);
        this.state = {
        email: '',
        password: ''
        }
    }

    handleChange(event) {
        let logIn = event.target.getAttribute('id');
        this.setState({[logIn]: event.target.value}, () => console.log(this.state));
    }
    
    formSubmit(event){
        console.log(event)
        event.preventDefault();
        API.userLogin(this.state)
    }

    render() {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" onChange={this.handleChange.bind(this)} value={this.state.email} type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" onChange={this.handleChange.bind(this)} value={this.state.password} type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
            </form>
            <div className="col s12 member">
                Don't have an account? <span onClick={() => this.props.handleFormChange('signup')}>
                <div className="sign-up">Sign up here</div></span>
            </div>

        <button onClick={this.formSubmit.bind(this)} className="btn waves-effect waves-light" type="submit" name="action">Submit
         <i className="material-icons right">send</i>
        </button>
        </div>
    )
    }
}


export default Login;