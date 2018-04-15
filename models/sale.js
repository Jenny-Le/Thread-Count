const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a saleSchema for our database
const saleSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    listing: {
        type: Schema.Types.ObjectId, ref: 'Listing'
    },
    buyer: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
});
const Sale = mongoose.model("Sale", saleSchema);


module.exports = Sale;