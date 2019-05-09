import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./App.css";
import Login from "./auth/Login";
import Users from "./users/Users";

function App(props) {
  function logout() {
    localStorage.removeItem("jwt");
    props.history.push("/login");
  }

  return (
    <>
      <header>
        <NavLink to="/login">Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/users">Users</NavLink>
        &nbsp;|&nbsp;
        <button type="button" onClick={logout}>
          Logout
        </button>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );
}

export default withRouter(App);
