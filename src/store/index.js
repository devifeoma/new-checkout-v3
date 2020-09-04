import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stage: 1,
    sidebar: true
  },
  mutations: {
    SET_STAGE: (state, data) => {
      state.stage = data;
    },
    SET_SIDEBAR: (state, data) => {
      state.stage = data;
    }
  },
  actions: {},
  modules: {}
});
