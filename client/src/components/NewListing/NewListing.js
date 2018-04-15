import React, { Component } from "react";
import API from "./API";
import ReactFilestack from 'filestack-react';
import { Redirect }  from "react-router-dom";
import { withCookies } from 'react-cookie';
import './newlisting.css';

//Creating a stateful NewListing component
class NewListing extends Component {
  constructor(props) {
    //setting up prop that is bassed in your component
    super(props)
    this.state = {
      gender: '',
      category: '',
      size: '',
      condition: '',
      price: '',
      name: '',
      image_url: '',
      redirect: false,
      user: ''
    }
  }

  handleChange(event) {
    let listingInput = event.target.getAttribute('id');
    this.setState({ [listingInput]: event.target.value }, () => console.log(this.state));
  }

  componentDidMount() {
    const { cookies } = this.props;
    this.setState({cookies: cookies}, this.checkIfLoggedIn);
    // jquery document on ready, initialize materialize select dropdowns
    window.$('document').ready(() => {
      window.$('select').formSelect();
    })

  }

  // check if user is logged in or not, redirect to login page
  checkIfLoggedIn(){
    if(!this.state.cookies.get('user')) {
        window.location.href = '/signup';
    } else {
      this.setState({user: this.state.cookies.get('user')._id}, () => console.log(this.state))
    }
  }

  // Creating a redirectHome function to send user back home if NewListing is successful
  redirectHome(){
    this.setState({redirect: true});
  }
  // Creating a formSubmit function for the form
  formSubmit(event) {
    event.preventDefault();
    API.createListing(this.state, this.redirectHome.bind(this))
  }

  renderUploadButton() {
    if (!this.state.image_url) {
      return (
        <div className="col s12 right-align">
          <ReactFilestack
            apikey="A191qbrAQNOWujKcfjlh2z"
            buttonText="Upload an image"
            buttonClass="btn waves-effect waves-light btn-small"
            onSuccess={response => this.setState({ image_url: response.filesUploaded[0].url }, () => console.log(this.state))}
          />
        </div>
      )
    }
  }
// Creating a requiredFields function, so the form has to be completed before user can submit
  requiredFields(){
    // get all the keys in the state
    let keys = Object.keys(this.state);
    // intialize the variable as false
    let emptyFields = false;
    // loop through all the keys and check the value in state to see if any of them are empty strings, if empty then set variable to true
    keys.forEach((key) => {
      if(this.state[key] === ''){
        emptyFields = true;
      }
    })
    return emptyFields;
  }

//Rendering a new listing form
  render() {
    return (
      <div className="row">
        <div className="col s12 center">
          <h5 className="form-title">Create a New Listing</h5>
        </div>
        <form className="col s12" id="new-listing">
          <div className="input-field col s12">
            <input id="name" type="text" onChange={this.handleChange.bind(this)} value={this.state.name} />
            <label htmlFor="name">Item Name</label>
          </div>
          <div className="input-field col s12">
            <select id="gender" onChange={this.handleChange.bind(this)} value={this.state.gender}>
              <option value="" disabled selected>Gender</option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>
          </div>
          <div className="input-field col s12">
            <select id="category" onChange={this.handleChange.bind(this)} value={this.state.category}>
              <option value="" disabled selected>Category</option>
              <option value="tops">Tops</option>
              <option value="bottoms">Bottoms</option>
              <option value="dresses">Dresses</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="input-field col s12">
            <select id="size" onChange={this.handleChange.bind(this)} value={this.state.condition}>
              <option value="" disabled selected>Size</option>
              <option value="new born">New Born</option>
              <option value="infant">Infant</option>
              <option value="infant">Toddler</option>
            </select>
          </div>
          <div className="input-field col s12">
            <select id="condition" onChange={this.handleChange.bind(this)} value={this.state.condition}>
              <option value="" disabled selected>Condition</option>
              <option value="new">New</option>
              <option value="gently used">Gently Used</option>
            </select>
          </div>

          {this.renderUploadButton()}

          <div className="input-field col s12">
            <select id="price" onChange={this.handleChange.bind(this)} value={this.state.condition}>
              <option value="" disabled selected>Price</option>
              <option value="1.00">1.00</option>
              <option value="2.00">2.00</option>
              <option value="3.00">3.00</option>
              <option value="4.00">4.00</option>
              <option value="5.00">5.00</option>
            </select>
          </div>
          <div className="col s12">
            <button disabled={this.requiredFields()} onClick={this.formSubmit.bind(this)} className="right btn waves-effect waves-light">Create Listing
                <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
        {
          this.state.redirect ? <Redirect push to="/"/>  : ""
        }
        
      </div>
    )
  }

}


export default withCookies(NewListing);



