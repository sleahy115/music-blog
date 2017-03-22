import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('blog');
  this.route('blog-page', {path: '/blog-page/:blogPost_id'});
});

export default Router;
