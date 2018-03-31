import axios from "axios"

export default {
    // Gets all users
    createListing: function(userData) {
      return axios.post("/api/listings", {
          gender: userData.gender,
          category: userData.category,
          condition: userData.condition,
      }).then(function(response){
          console.log(response);
      }).catch(function(error){
          console.log(error);
      });
    }
  };

  