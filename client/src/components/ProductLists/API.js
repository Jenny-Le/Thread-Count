import axios from "axios"

export default {
    getListings: function (updateListings) {
        // string interpolation with ES6 syntax so you can do this "api/users/" + userID + "/edit" easier
        return axios.get(`/api/listings`).then(function (response) {
            updateListings(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }
}; 