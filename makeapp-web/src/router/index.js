import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import AppView from '@/views/AppView';
import OwnersView from '@/views/OwnersView';
import SupportView from '@/views/SupportView';
import PageNotFound from '@/views/PageNotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/apps/:id',
      name: 'AppView',
      component: AppView,
    },
    {
      path: '/owners/:id',
      name: 'OwnersView',
      component: OwnersView,
    },
    {
      path: '/support',
      name: 'SupportView',
      component: SupportView,
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});
