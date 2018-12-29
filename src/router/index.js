import Vue from 'vue';
import Router from 'vue-router';
import Top from '../Top';
import AboutList from '../AboutList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/about',
      name: 'AboutList',
      component: AboutList,
    },
  ],
});
