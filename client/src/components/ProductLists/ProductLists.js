import React, { Component } from "react";
import ImageCard from "../ImageCard"
import PaymentForm from '../PaymentForm/PaymentForm';
import { withCookies } from 'react-cookie';
import API from "./API";
import { Redirect } from 'react-router-dom';


class ProductLists extends Component {
    constructor(props) {
        super(props)
        this.state ={
            listings: [],
            filter: this.props.filter,
            orderSuccess: false,
            cookies: null
        }
    }

    componentDidMount() {
        API.getListings(this.updateListings.bind(this));
        const { cookies } = this.props;
        this.setState({cookies: cookies})
        this.initializeModal();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.searchQuery != ''){
            API.searchListings(this.props.searchQuery, this.updateListings.bind(this));
        } else {
            API.getListings(this.updateListings.bind(this));
        }
    }

    initializeModal() {
        window.$(document).ready(function(){
            window.$('.modal').modal();
        });
    }

    redirectToOrderConfirmation(){
        if(this.state.orderSuccess) {
            return <Redirect to="/orders/success" />
        }
    }

    setItem(data){
        this.setState({price: data.price, 
                       listingId: data.listingId, 
                       userId: JSON.parse(this.state.cookies.cookies.user)._id})
    }

    setOrderSuccess() {
        this.setState({orderSuccess: true})
    }

    createSales() {
        API.createSales({
            listing: this.state.listingId,
            price: this.state.price,
            buyer: this.state.userId
        }, this.setOrderSuccess.bind(this))
    }

    updateListings(listings) {
        let allListings = listings;
        if (this.state.filter) {
            allListings = allListings.filter((listing) => {
                if (listing.category === this.state.filter || listing.gender === this.state.filter) {
                    return listing;
                }
            })
        }
        this.setState({listings: allListings})
    }

    renderLists(){
        return this.state.listings.map((listing, idx) => {
            return <ImageCard key={idx} id={idx} listing={listing} setItem={this.setItem.bind(this)} cookies={this.state.cookies}/>
        })
    }

    renderModal(){
        return (
            <div id="modal1" className="modal bottom-sheet">
                <div className="modal-content" style={{height: '25%'}}>
                    <PaymentForm createSales={this.createSales.bind(this)}/>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="row">
                {this.renderLists()}
                {this.renderModal()}
                {this.redirectToOrderConfirmation()}
            </div>
        )
    }
}

export default withCookies(ProductLists);