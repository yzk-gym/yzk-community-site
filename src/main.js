// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase/app';
import Vue from 'vue';
import router from './router';
import Events from './components/Events';
import Top from './top';
import Footer from './components/layouts/Footer';

require('./assets/css/main.css');

Vue.config.productionTip = false;
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBVnRCHYWucag-ovMvMlEYwuRMAkBaoId4',
  authDomain: 'yzk-community-site.firebaseapp.com',
  databaseURL: 'https://yzk-community-site.firebaseio.com',
  projectId: 'yzk-community-site',
  storageBucket: 'yzk-community-site.appspot.com',
  messagingSenderId: '1084140043286',
};
firebase.initializeApp(config);


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
