import Vue from 'vue';
import Router from 'vue-router';
import Events from '../components/events';
import Logo from '../components/logo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/',
      name: 'Logo',
      component: Logo,
    },
  ],
});
