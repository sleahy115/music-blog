import Ember from 'ember';

var test = [];


$.get("https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=114a62f01a5049e79f27797505873305").then(function(response) {
  for (var i = 0; i < response.articles.length; i++) {
    test[i] = {
      title: response.articles[i].title,
      url: response.articles[i].url,
      author: response.articles[i].author,
      body: response.articles[i].description,
      img_link: response.articles[i].urlToImage
    }
  }
});

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      clips: this.store.findAll('clip'),
      blogPosts: this.store.findAll('blogPost'),
      articles: test
    });
  }
});
