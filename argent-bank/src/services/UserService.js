import axios  from "axios";

const UserService = {
    loginUser: async function(userInfo) {
       return axios.post("http://localhost:3001/api/v1/user/login", userInfo).then(
            (resp) => {
                return resp.data;
            }
        );
    },
    createUser: async function(userInfo) {
        return axios.post("http://localhost:3001/api/v1/user/signup", userInfo).then(
            (resp) => {
                return resp.data;
            }
        );
     },
     getUserInfo: async function(token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.post("http://localhost:3001/api/v1/user/profile","", config).then(
            (resp) => {
                return resp.data;
            }
        );
     },
     updateUserInfo: async function(userInfo) {
        return axios.put("http://localhost:3001/api/v1/user/profile", userInfo).then(
            (resp) => {
                return resp.data;
            }
        );
     },

};

export default UserService;