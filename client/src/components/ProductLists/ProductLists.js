import React, { Component } from "react";
import ImageCard from "../ImageCard"
import PaymentForm from '../PaymentForm/PaymentForm';
import { withCookies } from 'react-cookie';
import API from "./API";
import { Redirect } from 'react-router-dom';
import './productlists.css';


class ProductLists extends Component {
    constructor(props) {
        super(props)
        this.state ={
            listings: [],
            filter: this.props.filter,
            orderSuccess: false,
            cookies: null,
            redirectHome: false,
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

    showSuccessMessage(){
        window.M.toast({html: "Purchase Confirmed!", displayLength: 1000, completeCallback: () => {window.location.reload()}})
    }

    setItem(data){
        this.setState({price: data.price, 
                       listingId: data.listingId, 
                       userId: JSON.parse(this.state.cookies.cookies.user)._id})
    }

    createSales() {
        API.createSales({
            listing: this.state.listingId,
            price: this.state.price,
            buyer: this.state.userId
        }, this.showSuccessMessage.bind(this))
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
            return <ImageCard key={idx} 
                              id={idx} 
                              listing={listing}
                              setItem={this.setItem.bind(this)}
                              deleteItem={API.deleteListings}
                              redirectHome={this.redirectHome.bind(this)}
                              cookies={this.state.cookies}/>
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

    redirectHome() {
        this.setState({redirectHome: true})
    }

    renderEmptyElement() {
        return (
            <div className="row">
                <div className="col s12 center-align">
                    <h1 className="no-listings"> Sorry, no listings yet!</h1>
                </div>
            </div>
        )
    }

    render() {
        if(this.state.listings.length == 0){
            return this.renderEmptyElement();
        } else {
            return (
                <div className="row">
                    {this.renderLists()}
                    {this.renderModal()}
                    { this.state.redirectHome ? <Redirect to="/" /> : null }
                </div>
            )
        }
    }
}

export default withCookies(ProductLists);