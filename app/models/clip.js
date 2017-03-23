import DS from 'ember-data';

// $.get("https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=114a62f01a5049e79f27797505873305").then(function(response) {
//   console.log(response.articles[0].title);
// });

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  img_link: DS.attr(),
  author: DS.attr(),
  publish_date: DS.attr(),
  blogs: DS.hasMany('blogPost', { async: true })
});
