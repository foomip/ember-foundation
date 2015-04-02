import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['data-magellan-arrival'],

  'data-magellan-arrival': Ember.computed('name', function () {
    return Ember.get(this, 'name');
  }),

  name: null,

  tagName: 'dd'
});
