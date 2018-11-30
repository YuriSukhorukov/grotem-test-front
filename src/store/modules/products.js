import shop from './../../api/shop.js'

const products = {

  namespaced: true,
  
  state: { 
  	all: [],
  	groups: [],
  },

  mutations: {
  	setProducts(state, products) {
  	  state.all = products
  	},
  	setGroups(state, groups) {
  	  state.groups = groups
  	}
  },

  actions: { 
  	loadWithParent({ commit }) {
  	  shop.getProductsWithParent().then(result => {
  	  	commit('setProducts', result.data)
  	  })
    },
    loadParents({ commit }) {
      shop.getProductsParents().then(result => {
        commit('setGroups', result.data)
      })
    }
  },

  getters: { 
  	all: state => {
  	  return state.all
  	},
  	groups: state => {
  	  return state.groups.filter(g => g.name !== null)
  	},
  	byGroup: state => name => {
      return state.all.filter(product => product.group.name === name)
  	}
  }
}

export default products