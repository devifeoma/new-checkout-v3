import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stage: 1
  },
  mutations: {
    SET_STAGE: (state, data) => {
      state.stage = data;
    }
  },
  actions: {},
  modules: {}
});
