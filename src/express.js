const express = require('express');
const app = express();

// controller
require('./TestController.js')(app);

// listen
app.listen(9999);
