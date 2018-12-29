import Vue from 'vue';
import Router from 'vue-router';
import Top from '../top';
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
