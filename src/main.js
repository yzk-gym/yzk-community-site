// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase';
import Vue from 'vue';
import router from './router';
import Top from './Top';
import App from './App';
import Footer from './components/layouts/TopFooter';
import AboutList from './AboutList';

Vue.config.productionTip = true;
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

