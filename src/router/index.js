import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/AppHome.vue';
import PizzaMenu from '@/views/PizzaMenu.vue';
import FrittiMenu from '@/views/FrittiMenu.vue';
import BeverageMenu from '@/views/BeverageMenu.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pizze',
    name: 'Pizze',
    component: PizzaMenu,
  },
  {
    path: '/fritti',
    name: 'Fritti',
    component: FrittiMenu,
  },
  {
    path: '/beverage',
    name: 'Beverage',
    component: BeverageMenu,
  }
  // { path: '/:notFound(.*)', component: Home }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
