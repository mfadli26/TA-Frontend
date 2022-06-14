// import { MODAL } from "../service/modalSession/ModalService";
// import ModalLogout from "../component/modal/ModalLogout";
// import ReactDOM from "react-dom";
export default function setupAxios(axios, store) {
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.interceptors.request.use(
    (config) => {
      const {
        user,
      } = store.getState();

      const auth_token = user?.auth_token

      if (user && auth_token) {
        config.headers.Authorization = `Bearer ${auth_token}`;
      }

      config.headers.post["Access-Control-Allow-Origin"] = "*";

      return config;
    },
    (err) => Promise.reject(err)
  );

  // axios.interceptors.response.use(
  //   function (response) {
  //     // console.log("respons:", response );
  //     return response;
  //   },
  //   function (error) {
  //     if ((error.response?.status === 400 || error.response?.status === 401) &&
  //       (error.response?.data.message === "TokenExpiredError" || error.response?.data.message === "UNAUTORIZED")) {
  //         <ModalLogout />
  //         ReactDOM.render(
  //           <ModalLogout />,
  //           document.getElementById("modal-react")
  //         );
  //     }
  //     console.log("Error interceptors.response => ", error);
  //     return Promise.reject(error);
  //   }
  // );
}
