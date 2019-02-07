import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/apps/:id',
      name: 'AppView',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "apps/:id" */ './views/AppView.vue'),
    },
    {
      path: '/owners/:id',
      name: 'OwnersView',
      component: () => import(/* webpackChunkName: "owners/:id" */ './views/OwnersView.vue'),
    },
    {
      path: '/support',
      name: 'SupportView',
      component: () => import(/* webpackChunkName: "support" */ './views/SupportView.vue'),
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});
