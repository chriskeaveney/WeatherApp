# AxonistaTest

Problem 2 - OpenWeather API

This application displays an interface showing the difference between the temperature in the users current location and a city
supplied by the user. The project was carried out using SCRUM agile software development techniques in Trello.

# Requirements

1. Download or clone the repository
2. cd AxonistaTest
3. npm install (backend dependencies)
4. cd client
5. npm install (client dependencies)

# To start

1. npm run dev (in root folder)
2. Open chrome browser and navigate to http://localhost:3000/ (if doesn't happen automatically)

# Usage

- Register an account (name, email, password)
- Login
- Allow location access from broswer to see location forecast
- Search for a weather forecast by entering a city name

![](img/app.gif)

# Testing
- This app was tested using JEST & Postman

JEST:

- Run npm run test in root project directory

Postman:

- Used to test login & register form validation

![](img/register.png)
 
1. Install Postman
2. Select POST on dashboard
3. Paste API enpoint URLs into the field
4. Select Body & enter correct (and incorrect) values to test errors
5. Press send 



