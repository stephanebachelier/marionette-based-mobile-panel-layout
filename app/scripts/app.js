define([
  'marionette',
  'backbone',
  'controllers/nav',
  'routers/nav'
],

function (Marionette, Backbone, NavController, NavRouter) {
  'use strict';

  return function () {
    var app = new Marionette.Application();

    app.addRegions({
      launching: '.launching',
      container: '.container'
    });

    app.addInitializer(function () {
      var controller = new NavController({region: app.container});
      this.router = new NavRouter({
        controller: controller
      });

      // keep track of application panel layout
      app.layout = controller.layout;
    });

    app.addInitializer(function () {
      var modules = [];

      require(['#user/index'], function (UserModule) {
        modules.push(new UserModule({
          region: app.layout.main
        }));
      });
    });

    app.addInitializer(function () {
      // add a timer to fake a launch screen
      setTimeout(function () {
        Backbone.history.start();
        // remove launching screen
        document.querySelector(app.launching.el).remove();
      }, 1000);
    });

    return app;
  };

});
