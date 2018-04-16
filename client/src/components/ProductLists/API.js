import axios from "axios"

export default {
    getListings: function (updateListings) {
        // string interpolation with ES6 syntax so you can do this "api/users/" + userID + "/edit" easier
        return axios.get(`/api/listings`).then(function (response) {
            updateListings(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    },
    searchListings: function (query, updateListings) {
        return axios.get(`/api/listings/search?q=${query}`).then(function (response) {
            updateListings(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    },
    createSales: function (salesData, redirect) {
        return axios.post("/api/sales", salesData)
            .then(redirect)
            .catch(function (error) {
                console.log(error);
            });
    },
    deleteListings: function (listingId, callback) {
        return axios.delete(`/api/listings/${listingId}`)
            .then(function (response) { callback() })
            .catch(function (error) {
                console.log(error)
        });
    }
};