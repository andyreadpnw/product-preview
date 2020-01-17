import React, { Component } from "react";
import "./App.css";
import TopNav from "./Nav";
import MainArea from "./MainArea";
import Login from "./Login";
import { api } from "./services/api";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      auth: {
        user: {}
      }
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("there is a token");
      // make a request to the backend and find user
      api.auth.getCurrentUser().then(user => {
        console.log(user);
        const updatedState = { ...this.state.auth, user: user };
        this.setState({ auth: updatedState });
      });
    }
  }

  login = data => {
    console.log("here");
    const updatedState = { ...this.state.auth, user: data };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState }, console.log(this.state.auth));
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  render() {
    return (
      <div className="App">
        <TopNav currentUser={this.state.auth.user} />
        <Login onLogin={this.login} />
        <BrowserRouter>
          <Route path="/home" component={MainArea} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
