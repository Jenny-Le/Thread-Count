import axios from "axios"

export default {
    // Gets all users
    createUser: function(userData, successCallback, errorCallback) {
      return axios.post("/api/users", {
          username: userData.username,
          first_name: userData.first_name,
          last_name: userData.last_name,
          password: userData.password,
          email: userData.email
      }).then(function(response){
          successCallback()
      }).catch(function(error){
          errorCallback("There was an error signing up! Please try again!")
      });
    }
  };

  