import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from './layouts/main'
import Home from './views/Home.vue'
import ProductDetails from './views/product/show'
import ProductCreate from './views/product/create'
import CardView from './views/card/show'
import ClosableLayout from './layouts/closable-layout'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          component: Home,
          name: 'home'
        }
      ]
    },
    {
      path: '/',
      component: ClosableLayout,
      children: [
        {
          path: '/card',
          component: CardView,
          name: 'card-view',
          meta: { title: 'My card' }
        },
        {
          path: '/product/:id',
          component: ProductDetails,
          name: 'product-show'
        },
        {
          path: '/product/create',
          component: ProductCreate,
          name: 'product-create'
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: 'about' */ './views/About.vue')
    // }
  ]
})

export default router
