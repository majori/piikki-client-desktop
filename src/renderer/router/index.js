import Vue from 'vue';
import Router from 'vue-router';

import Landing from '@/components/Pages/Landing';
import User from '@/components/Pages/User';
import Group from '@/components/Pages/Group';
import Graphs from '@/components/Pages/Graphs';
import Settings from '@/components/Pages/Settings';
import Login from '@/components/Pages/Login';
import CreateUser from '@/components/Pages/CreateUser';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: Landing,
    },
    {
      path: '/user',
      name: 'user-page',
      component: User,
    },
    {
      path: '/group',
      name: 'group-page',
      component: Group,
    },
    {
      path: '/graphs',
      name: 'graphs-page',
      component: Graphs,
    },
    {
      path: '/settings',
      name: 'settings-page',
      component: Settings,
    },
    {
      path: '/login',
      name: 'login-page',
      component: Login,
    },
    {
      path: '/create-user',
      name: 'create-user-page',
      component: CreateUser,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
