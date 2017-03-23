import Ember from 'ember';

export default Ember.Component.extend({

  showNewBlogForm: false,
  actions: {
    showNewBlogForm() {
      this.set('showNewBlogForm', true);
    },

    saveNewBlog() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        group: this.get('group'),
        img_link: this.get('img_link'),
        publish_date: this.get('publish_date'),
        title: this.get('title'),
        article: this.get('clip')
      };
      this.set('addNewBlog', false);
      this.sendAction('saveNewBlog', params);
    }
  }
});
