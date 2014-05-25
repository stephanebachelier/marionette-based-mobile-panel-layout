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
      this.router = new NavRouter({
        controller: new NavController({region: app.container})
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
