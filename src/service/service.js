import axios from "axios";

// export const URL = "http://localhost:5003"
export const URL = "http://localhost:8000"

// Login
export function login(email, password) {
    return axios.post(URL + "/api/login/check", { email: email, password: password });
}

// Profile
export function get_user_information(id) {
    return axios.get(URL + "/api/profile/" + id);
}