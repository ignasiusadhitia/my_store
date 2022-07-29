import React, { Component } from "react";
import axios from "axios";

const axiosRequest = axios.create();
const AuthContext = React.createContext();

// axios configuration
axiosRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token;
  return config;
});

export class AuthContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      user: localStorage.getItem("user") || {},
      token: localStorage.getItem("token") || "",
      isLoggedIn: localStorage.getItem("token") === null ? false : true,
    };
  }

  // login method
  login = (credentials) => {
    return (
      axiosRequest
        .post("https://test-binar.herokuapp.com/auth/login", credentials)

        //   TODO: tambahkan response kalau gagal login

        .then((response) => {
          const { token } = response.data;

          localStorage.setItem("token", token);

          this.setState({
            token,
            isLoggedIn: true,
          });

          return console.log("LOGIN SUCCESS!");
        })
    );
  };

  // logout method
  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      isLoggedIn: false,
    });

    return console.log("LOGOUT SUCCESS!");
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          ...this.state,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

// Higher Order Component
export const withAuth = (WrappedComponent) => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(context) => <WrappedComponent {...this.props} {...context} />}
        </AuthContext.Consumer>
      );
    }
  };
};
