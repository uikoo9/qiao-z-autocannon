module.exports = function (app) {
  app.get('/res-send', function (req, res) {
    res.send('test res.send');
  });

  app.get('/res-json', function (req, res) {
    res.json({ name: 'test res.json' });
  });

  app.get('/res-render', function (req, res) {
    res.render('./res-render.html');
  });

  app.get('/res-render-template', function (req, res) {
    res.render('./res-render-template.html', { name: 'test res.render with template' });
  });
};
