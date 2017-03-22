import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('blogPost');
  },
  actions: {
    saveNewBlog(params) {
    var newBlog = this.store.createRecord('blogPost', params);
    newBlog.save();
    this.transitionTo('blog');
    }
  }
});
