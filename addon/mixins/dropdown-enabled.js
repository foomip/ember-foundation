import Ember from 'ember';

export default Ember.Mixin.create({
  attributeBindings: ['aria-controls', 'data-dropdown', 'data-options'],

  setupDropdown: Ember.on('didInsertElement', function () {
    var alignment = Ember.get(this, 'align-dropdown');
    var dropdownId = Ember.get(this, 'dropdownId');
    var hover = Ember.get(this, 'hover');
    var options = [];

    if (!dropdownId) {
      return;
    }

    Ember.set(this, 'aria-controls', dropdownId);

    // A split button will not include this property directly
    if (!Ember.get(this, 'isSplit')) {
      Ember.set(this, 'data-dropdown', dropdownId);
    }

    if (alignment) {
      options.push('align:' + alignment);
    }

    if (hover) {
      options.push('is_hover:true');
    }

    Ember.set(this, 'data-options', options.join(';'));
  })
});
