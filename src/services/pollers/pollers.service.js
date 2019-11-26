// Initializes the `pollers` service on path `/pollers`
const { Pollers } = require('./pollers.class');
const createModel = require('../../models/pollers.model');
const hooks = require('./pollers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pollers', new Pollers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pollers');

  service.hooks(hooks);
};
