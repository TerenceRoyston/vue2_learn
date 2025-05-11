import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/Index.vue";
import Login from "@/views/Login.vue";
import AddGoods from "@/views/AddGoods.vue";
import GoodsList from "@/views/GoodsList.vue";
import CartList from "@/views/CartList.vue";
import My from "@/views/My.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/',
        component: AddGoods
      },
      {
        path: '/goodsList',
        component: GoodsList,
      },
      {
        path: '/cartList',
        component: CartList
      },
      {
        path: '/my',
        component: My,
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
})

export default router
