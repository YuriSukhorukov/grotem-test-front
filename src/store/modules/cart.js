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
      state.items.slice(state.items.indexOf(product), 1)
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
    addedItems: state => {
      return state.items
    },
    totalPrice: (state, getters) => {
      return getters.addProduct.reduce((total, product) => {
        return total + product.price
      })
    }
  }
}

export default cart