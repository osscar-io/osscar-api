module.exports = async (app) => {
  
  const users = [
    {
      firstName: 'System',
      lastName: 'Administrator',
      email: 'admin@local',
      password: 'changeme',
      internal: true
    },
    {
      firstName: 'SYSTEM',
      lastName: 'SERVICES',
      email: 'system@local',
      password: 'changeme',
      internal: true
    }
  ]

  const userTest = await app.service('users').find({});

  if( userTest.total == 0 ) {
    users.forEach( async user => {
      await app.service('users').create(user);
    });
  }


}