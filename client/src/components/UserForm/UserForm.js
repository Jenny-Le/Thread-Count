import React, { Component } from "react";


// You need a constructor to recieve props in a stateful component & state has to be defined in a constructor if you're receiving props
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      first_name: nextProps.first_name,
      last_name: nextProps.last_name,
      email: nextProps.email,
    }, () => window.M.updateTextFields())
  }

  render() {
    return (

      <div className="row">
        <form className="col s12" id="user-signup">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" onChange={this.props.handleChange.bind(this)} value={this.state.first_name} />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" onChange={this.props.handleChange.bind(this)} value={this.state.last_name} />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" onChange={this.props.handleChange.bind(this)} value={this.state.email} />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" onChange={this.props.handleChange.bind(this)} />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <button onClick={this.props.formSubmit.bind(this)} className="btn waves-effect waves-light">Submit
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

export default UserForm;