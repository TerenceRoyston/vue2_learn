<template>
  <div>
    <p>商品名称：<input ref="goodsNameRef" type="text"></p>
    <p>商品价格：<input ref="goodsPriceRef" type="text"></p>
    <button @click="addGoods">添加good</button>
    <h3>添加商品列表界面</h3>
  </div>
</template>

<script>
export default {
  name: "AddGoods",
  data(){
    return {

    }
  },

  methods:{
    addGoods(){
      const goodsName = this.$refs.goodsNameRef.value.trim();
      const goodsPrice = this.$refs.goodsPriceRef.value.trim();
      if(goodsName.length === 0 || goodsPrice.length === 0){
        alert("不为空")
        return;
      }
      this.$store.commit('ADD_GOODS',{goodsName,goodsPrice})
      this.$router.push("/goodsList")
    }
  }
}
</script>

<style scoped>

</style>