import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	height: window.innerHeight,
  	width: window.innerWidth,
    menuOpen: false,
    appClasses: 'App App-drop App-rotate',
    moveX: null,
    transDur: '0s',
    showLoader: true,
    mounts: 0,
  },
  mutations: {
  	resize(state) {
  		const { innerHeight, innerWidth } = window;
      document.body.style.height = innerHeight;
      document.body.style.width = innerWidth;
  		state.height = innerHeight; 
      state.width = innerWidth;
  	},
    updateMoveX(state, { gamma }) {
      const moveX = ((gamma + 90) * 100) / 180;
      if(moveX !== 0 && moveX !== 100) state.moveX = moveX;
    },
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    dropApp(state) {
      state.appClasses = 'App App-drop';
    },
    rotateApp(state) {
      state.appClasses = 'App App-drop App-rotate';
    },
    resetApp(state) {
      state.appClasses = 'App';
    },
    toggleLoader(state) {
      state.showLoader = !state.showLoader;
    },
    navigate(state, { page, router }) {
      const int = state.menuOpen ? 800 : 0;
      if(int > 0) this.commit('toggleMenu');
      if(page.replace(/\//g,'') !== router.currentRoute.fullPath.replace(/\//g,'')) {
        setTimeout(() => { this.commit('dropApp') }, int);
        setTimeout(() => { this.commit('rotateApp') }, int + 750);
        setTimeout(() => { this.commit('toggleLoader') }, int + 900);
        setTimeout(() => { router.push(page) }, int + 1500);
        setTimeout(() => { this.commit('dropApp') }, int + 2000);
        setTimeout(() => { this.commit('toggleLoader') }, int + 2200);
        setTimeout(() => { this.commit('resetApp') }, int + 2750);
      }
    },
    updateMounts(state) {
      state.mounts += 1;
    }
  },
  actions: {

  }
})
