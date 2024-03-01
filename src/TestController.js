module.exports = function (app) {
  app.get('/res-send', function (req, res) {
    res.send('test res.send');
  });

  app.get('/res-json', function (req, res) {
    res.json({ name: 'test res.json' });
  });
};
