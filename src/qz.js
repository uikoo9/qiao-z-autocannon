// qz
const qz = require('qiao-z');

// init
(async function () {
  // app
  const app = await qz();

  // listen
  app.listen(9999);
})();
