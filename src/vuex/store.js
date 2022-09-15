import {
	createStore
} from 'vuex';


// Create a new store instance.
const store = createStore({
	state() {
		return {
			count: 0,
			activity: null,
			actArray: []

		}
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		newActivity(state, val) {
			state.activity = val;
			state.actArray.unshift(val)
		}
	},
	getters: {
		lastN(state) {
			return function (n) {
				return state.actArray.slice(0, n);
			}
		}
	},

	actions: {
		incrementAsync({
			commit
		}) {
			setTimeout(() => {
				commit('increment')
			}, 1000)
		}
	}

})

export default store;