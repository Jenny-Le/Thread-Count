import React, { Component } from "react";
import API from "./API";



class NewListing extends Component {
  constructor(props) {
    //setting up prop that is bassed in your component
    super(props)
    this.state = {
      gender: '',
      category: '',
      condition: ''

    }
  }

  handleChange(event){
    let listingInput = event.target.getAttribute('id');
    this.setState({[listingInput]: event.target.value}, () => console.log(this.state));
  }

    componentDidMount() {
      window.$('document').ready( () => {
        window.$('select').formSelect();
      })
    }

    formSubmit(event){
        event.preventDefault();
        API.createListing(this.state)
    }


    render () {
      return (
        <div className="row">
          <div className="col s12 center">
            <h5>Create a New Listing</h5>
          </div>
          <form className="col s12" id="new-listing">
              <div className="input-field col s12">
                <select name="gender" onChange={this.handleChange.bind(this)} value={this.state.gender}>
                  <option value="" disabled selected>Gender</option>
                  <option value="1">Boy</option>
                  <option value="2">Girl</option>
                </select>
              </div>
              <div className="input-field col s12">
                <select name="category" onChange={this.handleChange.bind(this)} value={this.state.category}>
                  <option value="" disabled selected>Category</option>
                  <option value="1">Tops</option>
                  <option value="2">Bottoms</option>
                  <option value="3">Dresses</option>
                  <option value="4">Accessories</option>
                </select>
              </div>
              <div className="input-field col s12">
                <select name="condition" onChange={this.handleChange.bind(this)} value={this.state.condition}>
                  <option value="" disabled selected>Condition</option>
                  <option value="1">New</option>
                  <option value="2">Gently Used</option>
                  <option value="3">Dresses</option>
                  <option value="4">Accessories</option>
                </select>
            </div>
            <div className="col s12">
              <button onClick={this.formSubmit.bind(this)} className="right btn waves-effect waves-light">Create Listing
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>   
      )
    }
}

export default NewListing;



