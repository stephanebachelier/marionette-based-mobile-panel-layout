define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.Layout.extend({
    template: templates.panel,
    className: 'fullscreen',

    regions: {
      leftPanel: '.sidebar--panel',
      rightPanel: '.contextual--panel',
      main: '.main--content',
      nav: '.main--nav'
    }
  });
});
