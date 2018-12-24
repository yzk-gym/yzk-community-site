// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import Events from './components/events';
import Logo from './components/logo';
import NextEvent from './components/next_event';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#next-event',
  router,
  components: { NextEvent },
  template: '<NextEvent/>',
});

new Vue({
  el: '#events',
  router,
  components: { Events },
  template: '<events/>',
});

new Vue({
  el: '#p-logo',
  components: { Logo },
  template: '<logo/>',
});
