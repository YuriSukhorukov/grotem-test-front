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
  	  return state.all.map(val => {
  	  	if(val.group !== null){
  	  		val.skus.forEach(v => {
  	  			v.group = val.group.name
  	  			return v
  	  		})
  	  		return val.skus
  	  	}
  	  }).flat().filter(val => val != null)
  	},
  	byGroup: state => name => {
  	  return state.all.filter(products => {
  	  	if(products.group != null) 
  	  		return products.group.name === name
  	  }).map(val => {
  	  	if(val.group != null){
  	  		val.skus.forEach(v => {
  	  			v.group = val.group.name
  	  			return v
  	  		})
  	  		return val.skus
  	  	}
  	  }).flat().filter(val => val != null)
  	},
  	groups: state => {
  	  return state.groups.filter(g => g.name !== null)
  	}
  }
}

export default products