import Vue from 'vue'
import Vuex from 'vuex'
import goods from "@/store/goods";
import cart from "@/store/cart";
import user from "@/store/user";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liuDeHUa:1225
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // goods模块
    goods,
    // 购物车模块
    cart,
    // 用户模块
    user
  }
})
