import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '/user',
      name: 'user-page',
      component: require('@/components/pages/UserPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
