// autocannon
const autocannon = require('autocannon');

// options
const options = {
  url: 'http://localhost:9999',
  connections: 10,
  pipelining: 1,
  duration: 10,
};

// go
const instance = autocannon(options);
autocannon.track(instance);
