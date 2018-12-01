import shop from './../../api/shop.js'

const cart = {

  namespaced: true,
  
  state: { 
    items: []
  },

  mutations: {
    putProduct: (state, product) => {
      state.items.push(product)
    },
    outProduct: (state, product) => {
      let _product = state.items.find((p) => { return p.id === product.id })
      let _index = state.items.indexOf(product)
      state.items.splice(state.items.indexOf(_product), 1)
    }
  },

  actions: { 
    addProduct: ({ commit }, product) => {
      commit('putProduct', product)
    },
    removeProduct: ({ commit }, product) => {
      commit('outProduct', product)
    }
  },

  getters: { 
    added: state => {
      return state.items
    },
    totalPrice: (state, getters) => {
      return getters.added.reduce((total, product) => { return total + product.price }, 0)
    }
  }
}

export default cart