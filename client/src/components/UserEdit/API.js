import axios from "axios"

export default {
    userEdit: function (userData, userId) {
        // string interpolation with ES6 syntax so you can do this "api/users/" + userID + "/edit" easier
        return axios.put(`/api/users/${userId}`, {
            first_name: userData.first_name,
            last_name: userData.last_name,
            password: userData.password,
            email: userData.email
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    },
    getUser: function (userId, setUser) {
        return axios.get(`/api/users/${userId}`)
        .then(function(response){
            setUser(response.data)
        }).catch(function(error){
            console.log(error);
        })
    },
    deleteUser: function (userId, setUser) {
        return axios.delete(`/api/users/${userId}`)
        .then(function(response){
            window.location.href = '/'
        }).catch(function(error){
            console.log(error);
        })
    }
}; 