import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue';
import ContactView from '../views/ContactView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
