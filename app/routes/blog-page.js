import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('blogPost', params.blogPost_id, {include: 'clips'});

  },
  actions: {
    updateBlog(blogPost, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blogPost.set(key,params[key]);
        }
      });
      blogPost.save();
      this.transitionTo('blog');
    },
    delete(blogPost) {
      if(confirm('are you sure that you want to delete this blog post?')) {
        blogPost.destroyRecord();
        this.transitionTo('blog');
      }
    }
  }
});
