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
          commit('setProducts', result.data.map(val => {
          if(val.group !== null){
            val.skus.forEach(v => {
              v.group = val.group.name
              v.selected = false
              return v
            })
            return val.skus
          }
        }).flat().filter(val => val != null))
  	  })
    },
    loadParents({ commit }) {
      shop.getProductsParents().then(result => {
        commit('setGroups', result.data.filter(g => g.name !== null && g.name.match(/^([^0-9]*)$/)))
      })
    }
  },

  getters: { 
  	all: state => {
      return state.all
  	},
  	byGroup: state => name => {
      return state.all.filter(product => product.group === name)
  	},
  	groups: state => {
      return state.groups
  	}
  }
}

export default products