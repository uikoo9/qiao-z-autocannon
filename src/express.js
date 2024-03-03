const express = require('express');
const app = express();

// render
app.engine('html', require('express-art-template'));
app.set('views', __dirname);
app.set('view engine', 'html');

// controller
require('./TestController.js')(app);

// listen
app.listen(9999);
