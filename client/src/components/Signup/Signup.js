import React from "react";
import "./signup.css" 


const Signup = () => {
    return ( 
  <div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input id="first_name" type="text" className="validate"/>
        <label for="first_name">First Name</label>
      </div>
      <div className="input-field col s6">
        <input id="last_name" type="text" className="validate"/>
        <label for="last_name">Last Name</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="email" type="email" className="validate"/>
        <label for="email">Email</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="password" type="password" className="validate"/>
        <label for="password">Password</label>
      </div>
    </div>
 
    <div className="member">Already a member? Log in</div>
  </form>
</div>


    )
}



export default Signup;