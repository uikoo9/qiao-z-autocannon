const express = require('express');
const app = express();
const port = 9999;

// controller
require('./ResSendController.js')(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
