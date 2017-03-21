import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  img_link: DS.attr(),
  author: DS.attr(),
  publish_date: DS.attr()
});
