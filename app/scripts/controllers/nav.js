define([
  'marionette',
  'controllers/panel',
  'views/panel',
  'views/main',
  'views/nav'
],

function (Marionette, PanelController, PanelLayout, MainView, NavView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;

      this.layout = this.region.show(new PanelLayout()).currentView;
      this.controller = new PanelController({
        ui: {
          container: '.container',
          leftPanel: '.sidebar--panel',
          rightPanel: '.contextual--panel',
          leftButton: '.btn-nav',
          rightButton: '.btn-aside'
        }
      });
    },

    home: function () {
      // show main content
      this.layout.main.show(new MainView());
      this.layout.leftPanel.show(new NavView());
    }
  });
});
