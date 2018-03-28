import React from "react";
import "./login.css" 

const Login = (props) => {
    console.log(props);
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
            </form>
            <div className="col s12 member">
                Don't have an account? <span onClick={() => props.handleFormChange('signup')}>Sign up here</span>
            </div>
        </div>
    )
}


export default Login;