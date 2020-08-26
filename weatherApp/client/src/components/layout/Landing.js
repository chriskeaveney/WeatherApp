import React, {Component} from "react";
import {Link} from "react-router-dom";
class Landing extends Component {
  render() {
    return (<div style={{
        height: "75vh"
      }} className="landing-container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            Welcome to Weather App
          </h4>
          <p className="welcome-subtext">
            A real-time forecast application which uses geolocation
          </p>
          <br/>
          <div className="col s6" style={{
              paddingRight: "0px"
            }}>
            <Link to="/register" style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }} className="btn btn-large waves-effect waves-light hoverable">
              Register
            </Link>
          </div>
          <div className="col s6" style={{
              paddingLeft: "0px"
            }}>
            <Link to="/login" style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }} className="btn btn-large waves-effect white hoverable">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Landing;
