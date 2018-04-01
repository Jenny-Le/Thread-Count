import axios from "axios"

export default {
    // Gets all users
    createListing: function(userData) {
      return axios.post("/api/listings", {
          gender: userData.gender,
          category: userData.category,
          size: userData.size,
          condition: userData.condition,
          price: userData.price
      }).then(function(response){
          console.log(response);
      }).catch(function(error){
          console.log(error);
      });
    }
  };

  