import Vue from "vue";
import Router from "vue-router";
import MainLayout from "./layouts/main";
import Home from "./views/Home.vue";
import ProductDetails from './views/product/show'
import ProductCreate from './views/product/create'
import CardView from './views/card/show'
import { homedir } from "os";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          component: Home,
          name: "home"
        },
        {
          path: '/product',
          component: ProductDetails,
          name: 'product-details'
        },
        {
          path: '/product/create',
          component: ProductCreate,
          name: 'product-create'
        },
        {
          path: '/card',
          component: CardView,
          name: 'card-new'
        }
      ]
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
