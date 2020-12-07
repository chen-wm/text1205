import {getProdById} from '@/api/detail'

const getDefaultState = () => {
    return {
        productList:[] 
    }
}

const state = getDefaultState()

const mutations = {
    saveProdList: (state, arr) => {
        state.productList = [...arr]
    }
}

const actions = {
    //请求商品列表
    getProdList({commit},id){
        getProdById({id}).then(res => {
            commit('saveProdList', res.data.goods)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}