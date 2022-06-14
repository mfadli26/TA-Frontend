import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import $ from "jquery";
import moment from 'moment'
import { createRoot } from "react-dom/client";
// import './index.scss';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

window.jQuery = $;
window.$ = $;
global.jQuery = $;
window.moment = moment;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
