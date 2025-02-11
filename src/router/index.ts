import { createRouter, createWebHistory } from '@ionic/vue-router'; 
import HomeView from '@/views/HomeView.vue';

const routes = [
  { 
    path: '/:city?',
    alias: '/',
    component: HomeView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
