import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // Execute authorization token on every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Remove auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
