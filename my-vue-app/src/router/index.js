import { createRouter, createWebHistory } from 'vue-router';

// Import các component chính
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
 

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;