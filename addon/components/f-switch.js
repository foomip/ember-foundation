import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  classNames: ['switch'],

  inputId: Ember.computed('elementId', function () {
    return Ember.get(this, 'elementId') + '-input';
  }),

  tagName: 'fieldset',

  tabindex: 0,

  type: 'checkbox'
});
