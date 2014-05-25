define([
  'marionette',
  'backbone',
  'controllers/panel',
  'controllers/nav',
  'routers/nav'
],

function (Marionette, Backbone, PanelController, NavController, NavRouter) {
  'use strict';

  return function () {
    var app = new Marionette.Application();

    app.addRegions({
      sidebar: '.sidebar--panel',
      panel: '.contextual--panel',
      main: '.main--content',
      nav: '.main--nav'
    });

    app.addInitializer(function () {
      this.navController = new PanelController({
        ui: {
          container: '.container',
          leftPanel: '.sidebar--panel',
          rightPanel: '.contextual--panel',
          leftButton: '.btn-nav',
          rightButton: '.btn-aside'
        }
      });

      this.router = new NavRouter({
        controller: new NavController()
      });
    });

    app.addInitializer(function () {
      Backbone.history.start();
    });

    return app;
  };

});
