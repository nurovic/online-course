import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const actions = {
  CREATE_MOVIE: 'createMovie'  
}

const mutations = {
  SET_MOVIE_ID: "SET_MOVIE_ID",
};
const movies = {
  namespaced: true,
  state: {
    movieId: "",
  },
  mutations: {
    [mutations.SET_MOVIE_ID](state, movieId) {
      state.movieId = movieId;
    },
  },
  actions: {
    async [actions.CREATE_MOVIE]({ commit }, formdata) {
      const request = await axios.post("/movies", formdata);
      commit(mutations.SET_MOVIE_ID, request.data._id);
    },
  },
  modules: {},
};

export default movies;
