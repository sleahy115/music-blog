import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateBlogForm: false,
  actions: {
    showUpdateBlogForm() {
      this.set('showUpdateBlogForm', true);
    },
    updateBlog(blogPost) {
        var params = {
          author: this.get('author'),
          body: this.get('body'),
          group: this.get('group'),
          img_link: this.get('img_link'),
          publish_date: this.get('publish_date'),
          title: this.get('title'),
        };
        this.set('showUpdateBlogForm', false);
        this.sendAction('updateBlog', blogPost, params);
      }
    }
  });
