import axios from "axios"

export default {
    // Gets all users
    createListing: function(listingData) {
      return axios.post("/api/listings", listingData).then(function(response){
          console.log(response);
      }).catch(function(error){
          console.log(error);
      });
    }
  };

  