import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  group: DS.attr(),
  img_link: DS.attr(),
  publish_date: DS.attr(),
  title: DS.attr(),
  article: DS.belongsTo('clip', { async: true })
});
