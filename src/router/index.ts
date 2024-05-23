import { createRouter, createWebHistory } from 'vue-router'
import CategoriesAndProductsView from '@/views/CategoriesAndProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'categories',
      component: CategoriesAndProductsView
    },
    {
      path: '/category/:categoryId',
      name: 'category',
      component: CategoriesAndProductsView,
      props: true
    },
    {
      path: '/product/:productId',
      component: () => import('@/views/ProductView.vue'),
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
