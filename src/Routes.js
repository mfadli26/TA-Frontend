import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import Home from "./main/client/Home";
import Register from "./main/client/Register";
import Login from "./main/client/Login";
import Archive from "./main/client/Archive";
import Profile from "./main/client/Profile";

export default function Routes(props) {

  const isAuthorized = useSelector(
    (state) => state.user !== null && Object.keys(state.user).length > 0,
    shallowEqual
  );

  console.log(isAuthorized)

  return (

    // <Switch>
    //   {!isAuthorized ? (
    //     /*Render auth page when user at `/auth` and not authorized.*/
    //     <React.Fragment>
    //       <Route>
    //         <Login />
    //       </Route>
    //       <Redirect to="/login" />
    //     </React.Fragment>
    //   ) : (
    //     /*Otherwise redirect to root page (`/`)*/
    //     <Redirect from="/login" to="/" />
    //   )}

    //   {isAuthorized && <MainPages />}

    // </Switch>
    <Switch>
      <Route
        exact
        path="/">
        <Home />
      </Route>
      <Route
        path="/archive">
        <Archive />
      </Route>
      <Route
        path="/masuk">
        {!isAuthorized ? (
          <Login />
        )
          : (
            <React.Fragment>
              <Home />
              <Redirect from="/masuk" to="/" />
            </React.Fragment>
          )}
      </Route>
      <Route
        path="/daftar">
        {!isAuthorized ? (
          <Register />
        )
          : (
            <React.Fragment>
              <Home />
              <Redirect from="/masuk" to="/" />
            </React.Fragment>
          )}
      </Route>
      <Route
        path="/profile">
        {isAuthorized ? (
          <Profile />
        )
          : (
            <React.Fragment>
              <Home />
              <Redirect from="/masuk" to="/" />
            </React.Fragment>
          )}
      </Route>
    </Switch>
  );
}
