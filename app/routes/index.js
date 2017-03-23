import Ember from 'ember';

var artarr = [];


$.get("https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=114a62f01a5049e79f27797505873305").then(function(response) {
  for (var i = 0; i < response.articles.length; i++) {
    artarr[i] = {
      title: response.articles[i].title,
      body: response.articles[i].description,
      img_link: response.articles[i].urlToImage,
      author: response.articles[i].author,
      url: response.articles[i].url,
      blogs: {}
    }
  }
});

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      clips: this.store.findAll('clip'),
      blogPosts: this.store.findAll('blogPost'),
      articles: artarr
  });
},
    actions: {
      saveNewBlog(params) {
        var newBlog = this.store.createRecord('blogPost', params);
        var clip = artarr[0];
        var newClip = this.store.createRecord('clip', clip);
        newClip.get('blogs').addObject(newBlog);
        newBlog.save().then(function(){
        return newClip.save();
      });
        this.transitionTo('blog');
      }
  }
});
