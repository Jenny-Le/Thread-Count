import React, { Component } from "react";
import './imagecard.css';
//Creating an ImageCard component that passes in props


class ImageCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cookies: props.cookies
        }
    }

    handleClick(e) {
        e.preventDefault();
        let data = {
            listingId: this.props.listing._id,
            price: this.props.listing.price
        }

        this.props.setItem(data)
    }

    willReceiveProps(nextProps){
        if(nextProps.cookies){
            this.setState({cookies: nextProps.cookies})
        }
    }

    buttonDisabled() {
        if(this.state.cookies.get('user')){
            return false
        }
        return true
    }

    userExists() {
        return (this.state.cookies && this.state.cookies.cookies.user)
    }

    userCanDelete() {
        if(this.userExists() && this.props.listing.user && this.props.listing.user._id == JSON.parse(this.state.cookies.cookies.user)._id){
        return (
            <div className="close-container">
                <span className="right"><a href="/" onClick={this.deleteListing.bind(this)}>DELETE</a></span>
            </div>
        )}
    }

    deleteListing() {
        this.props.deleteItem(this.props.listing._id, this.props.redirectHome)
    }

    render() {
        const listing = this.props.listing
        return (
            <div className="col s4">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={listing.image_url} alt={listing.name} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator">
                            <span className="listing-name">{listing.name}</span>
                            <span className="right">${listing.price}.00</span>
                        </span>
                        <div className="details">
                            <span>Category: {listing.category}</span>
                            <span>Condition: {listing.condition}</span>
                        </div>   
                    </div>
                    <div className="card-reveal">
                        <div className="product-info">
                            <div className="card-top">
                                {this.userCanDelete()}
                                <div>
                                    <span className="card-title">
                                        <span className="listing-name">{listing.name}</span>
                                        <span className="right">${listing.price}.00</span>
                                    </span>
                                </div>
                                <div className="reveal-details">
                                    <div className='detail-item'>
                                        <span>Category:</span> <span>{listing.category}</span>
                                    </div>
                                    <div className='detail-item'>
                                        <span>Condition:</span> <span>{listing.condition}</span>
                                    </div>
                                    <div className='detail-item'>
                                        <span>Size:</span><span> {listing.size}</span>
                                    </div>  
                                    <div className='detail-item'>
                                        <span>Gender:</span><span> {listing.gender}</span>
                                    </div>  
                                </div>      
                                
                            </div>
                            <div className="card-bottom bottom-container">
                                <div className="social-icons">
                                    <a target="_blank" href="https://twitter.com/intent/tweet?button_hashtag=threadcount&ref_src=tc%5Etfw" className="twitter-hashtag-button twitter-icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a target="_blank" href="https://twitter.com/intent/tweet?button_hashtag=threadcount&ref_src=tc%5Etfw" className="facebook-icon">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <a className={`waves-effect waves-light btn modal-trigger buy-button ${ this.buttonDisabled() ? 'disabled': ''}`} href="#modal1" onClick={this.handleClick.bind(this)}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageCard;