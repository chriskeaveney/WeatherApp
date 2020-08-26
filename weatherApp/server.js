const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
var cors = require('cors')
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Database Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB is connected"))
  .catch(err => console.log(err));

  // Passport middleware
  app.use(passport.initialize());

  // Passport config
  require("./config/passport")(passport);

  // Routes
  app.use("/api/users", users);

  app.use(cors())

const port = process.env.PORT || 5000; // Port for Heroku if deploying
app.listen(port, () => console.log(`Server is running on port ${port}`));
