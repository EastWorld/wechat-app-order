import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isConnected: true
  },
  mutations: {
    setIsConnected: (state, isConnected) => {
      state.isConnected = isConnected
    }
  }
})

export default store

/*
this.$store.commit('setAppid','12344')
computed: {
  appId () {
    return this.$store.state.appId
  }
}
*/
