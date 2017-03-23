import Ember from 'ember';

var artarr = [];


$.get("https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=114a62f01a5049e79f27797505873305").then(function(response) {
  for (var i = 0; i < response.articles.length; i++) {
    artarr[i] = {
      author: response.articles[i].author,
      blogs: [],
      body: response.articles[i].description,
      img_link: response.articles[i].urlToImage,
      title: response.articles[i].title,
      url: response.articles[i].url
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
        var clip = {};
        for (var i = 0; i < artarr.length; i++){
          if (artarr[i].title === params.article.title){
            clip = artarr[i];
          }
        }
        var newClip = this.store.createRecord('clip', clip);
        newBlog.save().then(function(){
        newClip.get('blogs').addObject(newBlog);
        newClip.save();
        return newClip.save();
      });
        this.transitionTo('blog');
      }
  }
});
