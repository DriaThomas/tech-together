// const express = require('express')
// const app = express()

// app.set('view engine', 'hbs');
// var hbs = require('hbs');

// hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// app.get('/', function (req, res) {
//   res.render('view/index')
// })

// app.listen(3000)

// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('./config/index');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');




const app = express();


// Handles the handlebars
// https://www.npmjs.com/package/hbs

const hbs = require('hbs');


// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app);

const projectName = 'tech-together';
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = capitalized(projectName);

// Setting currentUser globally
// app.use(function (req, res, next) {
//   app.locals.currentUser = req.session.user;
//   next();
// });

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

// const authRoutes = require('./routes/auth.routes');
// app.use('/auth', authRoutes);

// const vehicleRoutes = require('./routes/vehicles.routes');
// app.use('/vehicles', vehicleRoutes);

// const reviewRoutes = require('./routes/review.routes');
// app.use('/review', reviewRoutes);

// const profileRoutes = require('./routes/profile.routes');
// app.use('/profile', profileRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;