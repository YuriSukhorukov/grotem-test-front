import shop from './../../api/shop';

const products = {
  namespaced: true,

  state: { 
    all: [],
    groups: [],
  },

  mutations: {
    setProducts(state, products) {
      state.all = products;
    },

    setGroups(state, groups) {
      state.groups = groups;
    }
  },

  actions: { 
    loadWithGroup({ commit }) {
      shop.loadProductsWithGroup().then((result) => {
          commit('setProducts', result.data.map((val) => {
            if (val.group !== null) {
              val.skus.forEach((sk) => {
                sk.group = val.group.name;
                sk.selected = false;
                return sk;
              })
              return val.skus;
            }
          })
          .flat()
          .filter((val) => {
            return val != null;
          }));
      });
    },

    loadGroups ({ commit }) {
      shop.loadProductsGroups().then((result) => {
        commit('setGroups', result.data.filter((g) => {
          return g.name !== null && g.name.match(/^([^0-9]*)$/);
        }));
      });
    }
  },

  getters: { 
    all (state) {
      return state.all;
    },
    byGroup: state => name => {
      return state.all.filter(product => product.group === name);
    },
    groups (state) {
      return state.groups;
    }
  }
}

export default products;