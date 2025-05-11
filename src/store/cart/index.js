const state = {
    cartList:[]
}

const mutations = {
    JOIN_CART(state,payload){
        const cartInfo = state.cartList.find(v => v.id === payload.id);
        if(cartInfo){
            cartInfo.buyNum++;
        }else {
            state.cartList=[
                {
                    ...payload,
                    buyNum:1

                },
                    ...state.cartList
            ]
        }

    }
}
export default {
    state,
    mutations
}