define([
  'marionette',
  'jquery',
  'underscore'
],

function (Marionette, $, _) {
  'use strict';

  // adapt from codrops article
  // really not performant!
  // idea: better would be to add a click handler on the content-wrapper instead
  var clickListener = function (event, ui) {
    if (ui.leftPanel[0] === event.target || ui.leftPanel.find(event.target).length ||
      ui.rightPanel[0] === event.target || ui.rightPanel.find(event.target).length) {
      // element clicked is in any sidebars or the sidebars themselves
      return false;
    }
    if (ui.container.hasClass('panel-open')) {
      ui.container.removeClass('panel-open');
      return true;
    }

    return false;
  };

  var PanelController = Marionette.Controller.extend({

    initialize: function (options) {
      // use marionette bind ui logic
      this.ui = options.ui;
      this.$ = $;
      Marionette.View.prototype.bindUIElements.call(this);

      this.ui.leftButton.on('click', _.bind(this.showLeftPanel, this));
      this.ui.rightButton.on('click', _.bind(this.showRightPanel, this));
      this.ui.container.on('webkitTransitionEnd moztransitionend transitionend oTransitionEnd',
        _.bind(this.onContainerTransitionEnd, this)
      );

      var self = this;
      this.clickListener = function (event) {
        if (clickListener(event, self.ui) === true) {
          document.addEventListener('click', self.clickListener);
        }
      };
    },

    onClose: function () {
      Marionette.View.prototype.unbindUIElements.call(this);
      this.ui.leftButton.off('click', this);
      this.ui.rightButton.off('click', this);
      this.ui.container.off('webkitTransitionEnd moztransitionend transitionend oTransitionEnd', this);
    },

    showLeftPanel: function (event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }

      this.ui.container.addClass('left-panel');
      var self = this;

      setTimeout(function () {
        self.ui.container.toggleClass('panel-open');
      }, 25);

      document.addEventListener('click', this.clickListener);
    },

    showRightPanel: function (event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }

      this.ui.container.addClass('right-panel');
      var self = this;

      setTimeout(function () {
        self.ui.container.toggleClass('panel-open');
      }, 25);

      document.addEventListener('click', this.clickListener);
    },

    onContainerTransitionEnd: function () {
      if (!this.ui.container.hasClass('panel-open')) {
        if (this.ui.container.hasClass('left-panel')) {
          this.ui.container.removeClass('left-panel');
        }
        if (this.ui.container.hasClass('right-panel')) {
          this.ui.container.removeClass('right-panel');
        }
      }
    }
  });

  return PanelController;
});
