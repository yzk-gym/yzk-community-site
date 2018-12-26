// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import Events from './components/Events';
import Top from './top';
import Footer from './components/layouts/Footer';

require('./assets/css/main.css');

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#events',
  router,
  components: { Events },
  template: '<events/>',
});

new Vue({
  el: '#top',
  components: { Top },
  template: '<Top/>',
});
new Vue({
  el: '#footer',
  components: { Footer },
  template: '<Footer/>',
});
