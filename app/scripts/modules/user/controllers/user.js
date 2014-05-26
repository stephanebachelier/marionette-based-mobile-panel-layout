define([
  'marionette',
  '../views/profile'
],

function (Marionette, ProfileView) {
  return Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
    },

    profile: function () {
      this.region.show(new ProfileView());
    },

    changePassword: function () {

    }
  });
});
