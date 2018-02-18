import Vue from 'vue';
import Router from 'vue-router';

import User from '@/components/pages/User';
import Group from '@/components/pages/Group';
import Graphs from '@/components/pages/Graphs';
import Settings from '@/components/pages/Settings';
import Login from '@/components/pages/Login';
import CreateUser from '@/components/pages/CreateUser';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user/login',
    },
    {
      path: '/user/login',
      name: 'login-page',
      component: Login,
    },
    {
      path: '/user',
      name: 'user-page',
      component: User,
    },
    {
      path: '/user/create',
      name: 'create-user-page',
      component: CreateUser,
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
      path: '*',
      redirect: '/user',
    },
  ],
});
