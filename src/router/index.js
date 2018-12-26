import Vue from 'vue';
import Router from 'vue-router';
import Events from '../components/Events';
import Logo from '../components/Logo';

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
