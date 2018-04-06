import React, { Component } from "react";
import ImageCard from "../ImageCard"
import API from "./API"


class ProductLists extends Component {
    constructor(props) {
        super(props)
        this.state ={
            listings: []
        }
    }

    componentDidMount() {
        API.getListings(this.updateListings.bind(this));
    }

    updateListings(listings) {
        this.setState({listings: listings}, () => console.log(this.state))
    }

    renderLists(){
        return this.state.listings.map((listing) => {
            return <ImageCard listing={listing}/>
        })
    }


    render() {
        return (
            <div className="row">
                {this.renderLists()}
            </div>
        )
    }
}

export default ProductLists;