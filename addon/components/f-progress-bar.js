import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  classNames: ['progress'],

  meterStyle: Ember.computed('value', function () {
    return 'width: ' + this.get('value') + '%;';
  }),

  tagName: 'div',

  value: 0
});
