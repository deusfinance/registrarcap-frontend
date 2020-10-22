import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Registrar from '@/components/Registrar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/darius',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/:registrar',
      name: 'Registrar',
      component: Registrar,
    },
  ],
});
