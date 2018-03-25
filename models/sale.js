const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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