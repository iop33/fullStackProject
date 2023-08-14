import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    productList: [],
    kasaljList: [],
    alergijaList: [],
    jetraList: [],
    stomakList: [],
    cajeviList: []
  },
  getters: {
  },
  mutations: {
    setProducts(state, raz) {
      state.productList = raz;
    },
    setKasalj(state, raz) {
      state.kasaljList = raz;
    },
    setAlergija(state, raz) {
      state.alergijaList = raz;
    },
    setJetra(state, raz) {
      state.jetraList = raz;
    },
    setStomak(state, raz) {
      state.stomakList = raz;
    },
    setCajevi(state, raz) {
      state.cajeviList = raz;
    }
  },
  actions: {
    fetchProducts({ commit }){
      fetch('http://localhost:8100/admin/product/',{
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => { 
            commit('setProducts', res)});
    },
    fetchKasalj({ commit }){
      fetch('http://localhost:8100/admin/product/kat/1',{
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => { 
            commit('setKasalj', res)});
    },
    fetchAlergija({ commit }){
      fetch('http://localhost:8100/admin/product/kat/2',{
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => { 
            commit('setAlergija', res)});
    },
    fetchJetra({ commit }){
      fetch('http://localhost:8100/admin/product/kat/4',{
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => { 
            commit('setJetra', res)});
    },
    fetchStomak({ commit }){
      fetch('http://localhost:8100/admin/product/kat/5',{
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => { 
            commit('setStomak', res)});
    },
    fetchCajevi({ commit }){
      fetch('http://localhost:8100/admin/product/kat/6',{
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => { 
            commit('setCajevi', res)});
    },
    getProduct({commit,state}){
      return new Promise((resolve,reject) =>{
        resolve(state.productList)
      })
    }
  },
  modules: {
  }
})
