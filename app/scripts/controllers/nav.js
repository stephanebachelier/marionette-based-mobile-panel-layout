define([
  'marionette'
],

function (Marionette) {
  'use strict';

  return Marionette.Controller.extend({
    home: function () {
      console.log('home');
    }
  });
});
