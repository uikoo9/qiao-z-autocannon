// qz
const qz = require('qiao-z');

// init
(async function () {
  console.log('start qz');

  // app
  const app = await qz();

  // listen
  app.listen(9999);

  console.log('start qz success');
})();
