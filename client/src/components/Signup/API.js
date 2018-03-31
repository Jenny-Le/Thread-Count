import axios from "axios"

export default {
    // Gets all users
    createUser: function(userData) {
      return axios.post("/api/users", {
          first_name: userData.first_name,
          last_name: userData.last_name,
          password: userData.password,
          email: userData.email
      }).then(function(response){
          console.log(response);
      }).catch(function(error){
          console.log(error);
      });
    }
  };

  