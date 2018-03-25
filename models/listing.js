const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    brand: {
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
    }
});
const Listing = mongoose.model("Listing", listingSchema);


module.exports = Listing;