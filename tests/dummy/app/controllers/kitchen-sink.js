import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changePage(page) {
      console.log('Changing pagination page to', page);
    },

    greet() {
      console.log('Hello!');
    },

    logValue(value) {
      console.log(value);
    }
  },

  breadCrumbName: 'Kitchen Sink',

  switchAOptions: Ember.A([
    {
      id: 'a',
      label: 'Off',
      value: 'off'
    }, {
      id: 'a1',
      label: 'On',
      value: 'on'
    }
  ]),

  switchAValue: 'off',

  switchBOptions: Ember.A([
    {
      id: 'b',
      label: 'Off',
      value: 'off'
    }, {
      id: 'b1',
      label: 'On',
      value: 'on'
    }
  ]),

  switchBValue: 'off',

  switchCOptions: Ember.A([
    {
      id: 'c',
      label: 'Off',
      value: 'off'
    }, {
      id: 'c1',
      label: 'On',
      value: 'on'
    }
  ]),

  switchCValue: 'off',

  switchDOptions: Ember.A([
    {
      id: 'd',
      label: 'Off',
      value: 'off'
    }, {
      id: 'd1',
      label: 'On',
      value: 'on'
    }
  ]),

  switchDValue: 'off'
});
