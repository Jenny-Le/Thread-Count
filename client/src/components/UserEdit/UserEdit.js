import React, { Component } from "react";
import UserForm from "../UserForm";
import API from "./API"

// You need a constructor to recieve props in a stateful component & state has to be defined in a constructor if you're receiving props
class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      userId: ""
    }
  }

  //mounts and will call this function
  componentDidMount() {
    API.getUser(this.props.match.params.id, this.setUser.bind(this))
  }

  setUser(user) {
    this.setState({ username: user.username, first_name: user.first_name, last_name: user.last_name, email: user.email, userId: user._id }, () => console.log(this.state))
  }

  deleteUser() {
    API.deleteUser(this.props.match.params.id)
  }

  handleChange(event) {
    let fieldName = event.target.getAttribute('id');
    this.setState({ [fieldName]: event.target.value }, () => console.log(this.state));
  }

  
  formSubmit(event) {
    console.log(event)
    event.preventDefault();
    API.userEdit(this.state, "5abf07516cf565477b27fc54")
  }

  render() {
    return (
      <div className="row">
        <div className='col s8 offset-s2 center-align'>
          <h4 className="form-title">Edit Account</h4>
        </div>
        <UserForm handleChange={this.handleChange.bind(this)}
          formSubmit={this.formSubmit.bind(this)}
          editForm={true}
          {...this.state}
          {...this.props} />
      </div>
    )
  }
}

export default UserEdit;