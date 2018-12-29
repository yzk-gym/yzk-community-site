// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import App from './App';
import Top from './top';
import Footer from './components/layouts/Footer';
import AboutList from './AboutList';

require('./assets/css/main.css');

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
new Vue({
  el: '#top',
  components: {
    Top,
  },
  template: '<Top/>',
});
new Vue({
  el: '#about-list',
  components: {
    AboutList,
  },
  template: '<AboutList/>',
});
new Vue({
  el: '#footer',
  components: {
    Footer,
  },
  template: '<Footer/>',
});
