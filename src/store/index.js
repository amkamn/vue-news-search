import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import service from './service';
export default new Vuex.Store({
  state: {
    title: 'News Search Web Site',
    list:[],
    errorMessage:'',
    loading:false,
  },
  mutations: {
    SET_INIT_VALUE(state, value) {
      state.list = value.results;
      state.loading = false;
    },
    SET_ERROR_MESSAGE(state){
      state.errorMessage = 'We Cant Any Data 😔';
    }
  },
  actions: {
    async init({ commit,state }) {
        try {
          state.loading = true;
          let response = await service.init();
           if(response.data.status === 'ok'){
             if(response.data.articles.length > 0){
              commit("SET_INIT_VALUE", {results: response.data.articles});
             }else{
              state.loading = false;
              setTimeout(() => {
                commit("SET_ERROR_MESSAGE");
              }, 1000);
             }
           }else{
            state.loading = false;
             setTimeout(() => {
                commit("SET_ERROR_MESSAGE");
              }, 1000);
           }
         
        } catch (err) {
          state.loading = false;
           setTimeout(() => {
                commit("SET_ERROR_MESSAGE");
              }, 1000);
        }
    },


    async search({ commit,state },value) {
      try {
        state.loading = true;
        let response = await service.search(value);
         if(response.data.status === 'ok'){
           if(response.data.articles.length > 0){
            commit("SET_INIT_VALUE", {results: response.data.articles});
           }
           else{
            state.loading = false;
            setTimeout(() => {
              commit("SET_ERROR_MESSAGE");
            }, 1000);
           }
         }else{
          state.loading = false;
           setTimeout(() => {
              commit("SET_ERROR_MESSAGE");
            }, 1000);
         }
       
      } catch (err) {
        state.loading = false;
        setTimeout(() => {
             commit("SET_ERROR_MESSAGE");
           }, 1000);
      }
  },

  },
  getters: {
    getList(state) {
      return state.list;
    },
  }
})
