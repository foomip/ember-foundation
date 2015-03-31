import FComponent from './f-component';

export default FComponent.extend({
  href: function() {
    return '#' + this.get('panelId');
  }.property('panelId'),

  panelId: function() {
    return this.get('elementId') + '-panel';
  }.property('elementId'),

  classNames: ['accordion-navigation'],

  tagName: 'dd'
});
