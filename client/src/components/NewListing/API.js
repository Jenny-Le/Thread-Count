import axios from "axios"

export default {
    // Gets all users
    createListing: function (listingData, callback) {
        return axios.post("/api/listings", listingData)
            .then(callback)
            .catch(function (error) {
                console.log(error);
            });
    }
};