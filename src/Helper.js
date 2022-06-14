// URL
// export const URL_API = `http://purwadhikafs3.com:3002`;
export const URL_API = `http://localhost:2010`;

// USER CONTROLLER
export const LOGIN_SUCCES = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGIN_FAILED = "LOGIN_FAILED";

//GET TOKEN
export const headers = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("tkn_id")}`,
  },
};
