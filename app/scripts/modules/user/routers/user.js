define([
  'marionette'
],

function (Marionette) {
  return Marionette.AppRouter.extend({
    appRoutes: {
      profile: 'profile',
      'change-password': 'changePassword'
    }
  });
});
