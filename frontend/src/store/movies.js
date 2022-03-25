import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const MUTATIONS = {
  SET_MOVIE_ID: "SET_MOVIE_ID",
};
const movies = {
  namespaced: true,
  state: {
    movieId: "",
  },
  mutations: {
    [MUTATIONS.SET_MOVIE_ID](state, movieId) {
      state.movieId = movieId;
    },
  },
  actions: {
    async createMovie({ commit }, formdata) {
      const request = await axios.post("/movies", formdata);
      commit(MUTATIONS.SET_MOVIE_ID, request.data._id);
    },
  },
  modules: {},
};

export default movies;
