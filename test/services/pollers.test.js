const assert = require('assert');
const app = require('../../src/app');

describe('\'pollers\' service', () => {
  it('registered the service', () => {
    const service = app.service('pollers');

    assert.ok(service, 'Registered the service');
  });
});
