import axios from "axios"

export default {
    // Gets all users
    userLogin: function(userData) {
      return axios.post("/api/users/login", {
          email: userData.email,
          password: userData.password
      }).then(function(response){
          console.log(response);
      }).catch(function(error){
          console.log(error);
      });
    }
  };
