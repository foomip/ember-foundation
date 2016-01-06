import Ember from 'ember';

export default {
  name: 'ember-foundation',

  initialize(app) {
    app.inject('component:f-breadcrumbs', 'router', 'router:main');
  }
};
