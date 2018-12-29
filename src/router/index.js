import Vue from 'vue';
import Router from 'vue-router';
import Events from '../components/Events';
import Top from '../top';
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
  ],
});
