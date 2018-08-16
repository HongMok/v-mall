
import AuthorizeConfig from '@/config/authorize-config';


const state = {
    userInfo: null,
    authType: AuthorizeConfig.UNPROMPTED
}

// getters
const getters = {
  // cartProducts: (state, getters, rootState) => {
  //   return state.items.map(({ id, quantity }) => {
  //     const product = rootState.products.all.find(product => product.id === id)
  //     return {
  //       title: product.title,
  //       price: product.price,
  //       quantity
  //     }
  //   })
  // },

  // cartTotalPrice: (state, getters) => {
  //   return getters.cartProducts.reduce((total, product) => {
  //     return total + product.price * product.quantity
  //   }, 0)
  // }
}

// actions
const actions = {
    actLoginInfo({commit, state}, {type, info}){
      commit('setAuthType', {type});
      commit('setUserInfo', {info});
    }
}

// mutations
const mutations = {
  setAuthType(state, {type}){
    state.authType = type;
  },

  setUserInfo(state, {info}){
    state.userInfo = info;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}