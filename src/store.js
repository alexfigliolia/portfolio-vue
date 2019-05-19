import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	height: window.innerHeight,
  	width: window.innerWidth
  },
  mutations: {
  	resize(state) {
  		const { innerHeight, innerWidth } = window;
  		state.height = innerHeight; 
      state.width = innerWidth;
  	}
  },
  actions: {

  }
})
