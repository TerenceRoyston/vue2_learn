<template>
  <div>
    <h3>商品列表界面</h3>
    <div v-for="item in $store.state.goods.goodsList" :key="item.id">
      <p>商品名称：{{item.goodsName}}</p>
      <p>商品价格：{{item.goodsPrice | currency}}</p>
      <p>上架时间：{{item.addTime | date}}</p>
      <button @click="$store.commit('JOIN_CART',item);$router.push('/cartList')">加入购物车</button>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsList"
}
</script>

<style scoped>

</style>