const state = {
    goodsList:[]
}
const mutations = {
    ADD_GOODS(state, {goodsName,goodsPrice}){
        state.goodsList=[
            {
                id:Date.now(),
                goodsName,
                goodsPrice:goodsPrice/1,
                addTime: Date.now()
            },
                ...state.goodsList,
        ]
    }
}
export default {
    state,
    mutations
}