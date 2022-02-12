// // We reuse this import in order to have access to the `body` property in requests
// const express = require("express");

// // ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// // https://www.npmjs.com/package/morgan
// const logger = require("morgan");

// // ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// // https://www.npmjs.com/package/cookie-parser
// const cookieParser = require("cookie-parser");

// // ℹ️ Needed to accept from requests from 'the outside'. CORS stands for cross origin resource sharing
// // unless the request if from the same domain, by default express wont accept POST requests
// const cors = require("cors");

// // Middleware configuration
// module.exports = (app) => {
//   // Because this is a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
//   // Services like heroku use something called a proxy and you need to add this to your server
//   app.set("trust proxy", 1);

//   // controls a very specific header to pass headers from the frontend
//   app.use(
//     cors({
//       credentials: true,
//       origin: process.env.ORIGIN || "http://localhost:5005",
//     })
//   );
//   app.engine('hbs', hbs({
//     extname: 'hbs', 
//     defaultLayout: 'base', 
//     layoutsDir: path.join(__dirname, 'views/layouts'),
//     partialsDir  : [
//         //  path to your partials
//         path.join(__dirname, 'views/partials'),
//     ]
// }));

//   // In development environment the app logs
//   app.use(logger("dev"));
//   // To have access to `body` property in the request
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: false }));
// };


// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

// ℹ️ Serves a custom favicon on each request
// https://www.npmjs.com/package/serve-favicon
const favicon = require("serve-favicon");

// ℹ️ global package used to `normalize` paths amongst different operating systems
// https://www.npmjs.com/package/path
const path = require("path");

// ℹ️ Session middleware for authentication
// https://www.npmjs.com/package/express-session
const session = require("express-session");

// ℹ️ MongoStore in order to save the user session in the database
// https://www.npmjs.com/package/connect-mongo
const MongoStore = require("connect-mongo");

// // Connects the mongo uri to maintain the same naming structure
const MONGO_URI = require("../utils/consts");

// Middleware configuration
module.exports = (app) => {
  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Normalizes the path to the views folder
  app.set("views", path.join(__dirname, "..", "views"));
  // Sets the view engine to handlebars
  app.set("view engine", "hbs");
  // Handles access to the public folder
  app.use(express.static(path.join(__dirname, "..", "public")));

  // Handles access to the favicon
  app.use(favicon(path.join(__dirname, "..", "public", "images", "favicon.ico")));

  // ℹ️ Middleware that adds a "req.session" information and later to check that you are who you say you are 😅
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "super hyper secret key",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
      }),
    })
  );
};