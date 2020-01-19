import React, { Component } from "react";
import "./App.css";
import TopNav from "./Nav";
import MainArea from "./MainArea";
import Login from "./Login";
import Tickets from "./Tickets";
import Profile from "./Profile";
import { api } from "./services/api";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      auth: {
        user: {
          user_id: { id: null, username: null }
        }
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
    console.log(data.user.username);
    const updatedState = { ...this.state.auth, user: data };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState }, () => {
      console.log(this.state.auth.user.user.username);
    });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  render() {
    return (
      <div className="App">
        <TopNav currentUser={this.state.auth} />
        <BrowserRouter>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route
            path="/login"
            render={props => <Login {...props} onLogin={this.login} />}
          />
          <Route exact path="/home" component={MainArea} />
          <Route
            path="/userprofile"
            render={props => (
              <Profile {...props} currentUser={this.state.auth} />
            )}
          />
          <Route
            path="/tickets"
            render={props => (
              <Tickets {...props} currentUser={this.state.auth} />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
