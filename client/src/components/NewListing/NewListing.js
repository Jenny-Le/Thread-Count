import React, { Component } from "react";
import API from "./API";



class NewListing extends Component {
  constructor(props) {
    //setting up prop that is bassed in your component
    super(props)
    this.state = {
      gender: '',
      category: '',
      size: '',
      condition: '',
      price:'',
      name: ''
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
                </select>
            </div>
              <div className="input-field col s12">
                <select id="condition" onChange={this.handleChange.bind(this)} value={this.state.condition}>
                  <option value="" disabled selected>Condition</option>
                  <option value="new">New</option>
                  <option value="gently used">Gently Used</option>
                </select>
            </div>
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



