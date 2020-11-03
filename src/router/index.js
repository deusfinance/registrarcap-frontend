import Vue from 'vue';
import Router from 'vue-router';
import Prices from '@/components/Prices';
import Registrar from '@/components/Registrar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Prices',
      component: Prices,
    },
    {
      path: '/:registrar',
      name: 'Registrar',
      component: Registrar,
    },
  ],
});
