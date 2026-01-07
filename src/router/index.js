import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store';
import { getRouteImages } from './imageManifest';
import { preloadImages } from '@/mixins/imagePreloader';

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
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});

// Navigation guard - runs BEFORE route component loads
router.beforeEach(async (to, from, next) => {
  // Skip loading for same-route navigation
  if (to.name === from.name) {
    next();
    return;
  }

  // Check if route images are already cached
  const isPreloaded = store.getters['ui/isRoutePreloaded'](to.name);
  const routeImages = getRouteImages(to.name);

  // Only show spinner if there are images to preload and they're not cached
  if (routeImages.length > 0 && !isPreloaded) {
    store.dispatch('ui/startLoading');

    try {
      await preloadImages(routeImages);
      store.dispatch('ui/markRoutePreloaded', to.name);
    } catch (e) {
      console.warn('Image preloading failed:', e);
    }
  }

  next();
});

// After navigation completes
router.afterEach(() => {
  setTimeout(() => {
    store.dispatch('ui/stopLoading');
  }, 150);
});

export default router
