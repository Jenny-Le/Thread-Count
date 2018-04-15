import axios from "axios"

export default {
    // Gets all users
    userLogin: function(userData, successLogin, errorLogin) {
      return axios.post("/api/users/login", {
          username: userData.username,
          password: userData.password
      }).then(function(response){
        successLogin(response.data.user);
      }).catch(function(error){
          errorLogin();
      });
    }
  };
