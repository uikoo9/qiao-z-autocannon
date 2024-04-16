// qz
const qz = require('qiao-z');

// init
(async function () {
  console.log('start qz');

  // app
  const app = await qz();

  // listen
  const port = process.argv[2] || 9999;
  app.listen(port);

  console.log(`start qz success, on ${port}`);
})();
