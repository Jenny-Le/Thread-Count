import React from "react";


const ImageCard = (props) => {
    const listing = props.listing
    return (
        <div className="col s3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/office.jpg" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{listing.name}<i className="material-icons right">more_vert</i></span>
                <p><a href="#">${listing.price}.00</a></p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{listing.name}<i className="material-icons right">close</i></span>
                <p>${listing.price}.00</p>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;