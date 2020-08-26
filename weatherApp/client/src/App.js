import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser} from "./actions/authActions";
import {Provider} from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import About from "./components/extras/About";
import Contact from "./components/extras/Contact";
import currentLocation from "./components/dashboard/currentLocation";

// Check local storage for JWT to keep user signed in
if (localStorage.jwtToken) {
  // Create variable for auth token
  const authToken = localStorage.jwtToken;
  setAuthToken(authToken);
  // Decode/decrypt token to get details of user
  const decrypted = jwt_decode(authToken);
  // Set isAuthenticated & current user
  store.dispatch(setCurrentUser(decrypted));
  // Check if token is expired
  const currentTime = Date.now() / 1000; // (get in milliseconds)
  if (decrypted.exp < currentTime) {
    // Signout the user
    store.dispatch(logoutUser());
    // Redirect to login page
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (<Provider store={store}>
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Switch>
            <PrivateRoute exact path="/currentLocation" component={currentLocation}/>
            <PrivateRoute exact path="/About" component={About}/>
            <PrivateRoute exact path="/Contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    </Provider>);
  }
}
export default App;
