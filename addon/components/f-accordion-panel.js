import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  href: Ember.computed('panelId', function () {
    return '#' + Ember.get(this, 'panelId');
  }),

  panelId: Ember.computed('elementId', function () {
    return Ember.get(this, 'elementId') + '-panel';
  }),

  classNames: ['accordion-navigation'],

  tagName: 'dd'
});
