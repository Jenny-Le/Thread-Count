const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a listingSchema for our databse
const listingSchema = new Schema({
    gender: {
        type:String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: false
    },

    price: {
        type: Number,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    image_url: {
        type: String,
        required: true
    }
});
const Listing = mongoose.model("Listing", listingSchema);


module.exports = Listing;