import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blogPost', params.blogPost_id);
  },
  actions: {
    delete(blogPost) {
      if(confirm('are you sure that you want to delete this blog post?')) {
        blogPost.destroyRecord();
        this.transitionTo('blog');
      }
    }
  }
});
