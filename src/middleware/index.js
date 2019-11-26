const status = require('./status');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/status', status());
};
