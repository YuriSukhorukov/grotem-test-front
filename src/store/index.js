import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.store({
	state: {
		results: []
	},
	actions: {
		seartch({ state, dispatch, commit}, query) {
			dispatch('seartch', 'фонарь') // action
			commit('set', 'фонарь') // mutation (set, change, delete)
		}
	}
})