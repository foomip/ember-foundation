import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  classNames: ['switch'],

  setup: Ember.observer('didInsertElement', function () {
    var value = Ember.get(this, 'value');
    Ember.$('input[value="' + value + '"]', this).prop('checked', true);

    var input = Ember.$('input', this);
    input.on('change', () => {
      Ember.set(this, 'value', input.val());
    });
  }),

  tabindex: 0,

  tagName: 'fieldset',

  type: 'radio'
});
