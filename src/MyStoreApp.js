import React, { Component } from "react";
import Login from "./components/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

class MyStoreApp extends Component {
  render() {
    return (
      <AuthContextProvider>
        <BrowserRouter>
          <Route path="/" exact component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </BrowserRouter>
      </AuthContextProvider>
    );
  }
}

export default MyStoreApp;
