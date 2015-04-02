import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  setup: Ember.on('didInsertElement', function () {
    var tabs = Ember.A();

    this.$('.content').each(function () {
      tabs.push({
        href: '#' + this.getAttribute('id'),
        title: this.getAttribute('data-tab-title')
      });
    });

    Ember.set(this, 'tabs', tabs);
  }),

  tagName: 'div'
});
