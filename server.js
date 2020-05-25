// Dependencies
const express = require('express');

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static('app/public'));

// Set up the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Set Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes 
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Start our server so it can listen to client requests
app.listen(PORT, function () {
    console.log('Server listening on: http://localhost: ' + PORT);
});
