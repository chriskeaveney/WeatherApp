import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Navbar, Button} from 'react-bootstrap';
import {logoutUser} from "../../actions/authActions";
import "../../App.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  showSettings(event) {
    event.preventDefault();
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {

    let form;

    if (this.props.auth.isAuthenticated) {
      form = <div style={{
          width: "100%"
        }}>
        <a id="home" className="nav-item" href="/About" style={{
            marginLeft: "80px"
          }}>About</a>
        <a id="about" className="nav-item" href="/Contact">Contact</a>
        <Button style={{
            width: "100px",
            borderRadius: "3px",
            letterSpacing: "1px",
            marginLeft: "10px",
            float: "right"
          }} onClick={this.onLogoutClick} variant="outline-danger" className="logout hoverable">
          Logout
        </Button>
      </div>

    } else {
      form = <p></p>;
    }

    return (<div className="navbar-fixed">
      <Navbar bg="light" variant="light">
        {form}
        <a href="/currentLocation">
          <div className="icon"></div>
        </a>
      </Navbar>
    </div>);
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps, {logoutUser})(NavBar);
