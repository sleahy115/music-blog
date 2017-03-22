import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    showNewBlogForm() {
      this.set('addNewBlog', true);
    },

    saveBlog() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        author: this.get('author'),
        img_src: this.get('img_src'),
        publish_date: this.get('publish_date'),
        body: this.get('body')
        description: this.get('description')
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog', params);
    }
  }
});

});
