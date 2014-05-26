define([
  'marionette',
  './controllers/user',
  './routers/user'
],

function (Marionette, UserController, UserRouter) {
  return function (options) {
    this.router = new UserRouter({
      controller: new UserController({region: options.region})
    });
  };
});
