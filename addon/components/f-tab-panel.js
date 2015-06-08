import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  setup: Ember.on('didInsertElement', function () {
    var activeTabId = this.get('activeTabId');
    var self = this;
    var tabs = Ember.A();

    this.$('.content').each(function () {
      tabs.push({
        href: '#' + this.getAttribute('id'),
        title: this.getAttribute('data-tab-title')
      });
    });

    Ember.set(this, 'tabs', tabs);

    if (activeTabId) {
      Ember.run.next(function () {
        self.$('a[href="#' + activeTabId + '"]').parent().addClass('active');
        self.$('#' + activeTabId).addClass('active');
      });
    }
  }),

  tagName: 'div'
});
