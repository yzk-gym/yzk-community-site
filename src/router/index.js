import Vue from 'vue';
import Router from 'vue-router';
import Top from '../Top';
import AboutList from '../AboutList';
import EventList from '../EventList';
import PastEventList from '../PastEventList';
import EventDescription from '../EventDescription';

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
    {
      path: '/events',
      name: 'EventList',
      component: EventList,
    },
    {
      path: '/past_events',
      name: 'PastEventList',
      component: PastEventList,
    },
    {
      path: '/events/:id',
      name: 'EventDescription',
      component: EventDescription,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
