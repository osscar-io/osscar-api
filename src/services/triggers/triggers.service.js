// Initializes the `triggers` service on path `/triggers`
const { Triggers } = require('./triggers.class');
const createModel = require('../../models/triggers.model');
const hooks = require('./triggers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/triggers', new Triggers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('triggers');

  service.hooks(hooks);
};
